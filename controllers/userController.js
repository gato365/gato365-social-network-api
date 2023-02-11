// Get ObjectID and Tyoe from Mongoose
const { ObjectId } = require('mongoose').Types;

// Get User and Thought Model
const { User, Thought } = require('../models');

// Friend Count as async function
const friendCount = async (userId) => {
    User.aggregate([
        // Match the user id
        { $match: { _id: ObjectId(userId) } },
        // Unwind the friends array
        { $unwind: '$friends' },
        // Group by the user id
        { $group: { _id: '$_id', friendCount: { $sum: 1 } } }
    ]).then(numberOfFriends => { numberOfFriends })
        .catch(err => console.log(err));
};

// Reaction Count as async function
const reactionCount = async (thoughtId) => {
    Thought.aggregate([
        // Match the thought id
        { $match: { _id: ObjectId(thoughtId) } },
        // Unwind the reactions array
        { $unwind: '$reactions' },
        // Group by the thought id
        { $group: { _id: '$_id', reactionCount: { $sum: 1 } } }
    ]).then(numberOfReactions => { numberOfReactions })
        .catch(err => console.log(err));
};


module.exports = {
    // Create User
    CreateUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    // Find all Users
    getUsers(req, res) {
        User.find()
            .then(async (users) => {
                const userData = {
                    users: users,
                    friendCount: await friendCount(users._id),
                    reactionCount: await reactionCount(users._id)
                };
                return res.json(userData);

            }).catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // Find User by ID
    getSinlgeUser(req, res) {
        User.findOne({ _id: req.params.id })
            .select('-__v')
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with this id!' })
                    : res.json({
                        user,
                        friendCount: await friendCount(users._id),
                        reactionCount: await reactionCount(users._id)
                    })
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    // Update User by ID
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { runValidators: true, new: true }

        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete User by ID
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.id })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with this id!' })
                    : User.findOneAndUpdate(
                        { _id: { $in: user.friends } },
                        { $pull: { friends: user._id } },
                        { new: true }
                    )
            )
            .then((user) =>
                !user
                    ? res.status(404).json({
                        message: 'No user found with this id!'
                    })
                    : res.json({ message: 'User deleted!' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });

        },
    };