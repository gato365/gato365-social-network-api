// Get Thoughts and User Models
const { Thought, User } = require('../models');



module.exports = {
    // Post Thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // Get All Thoughts
    getAllThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    //Delete Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ 
            _id: req.params.thoughtId 
        })
            .then((thought) => {
                if (!thought) {
                    res.status(404).json({ message: 'No thought found with this id!' });
                    return;
                }
                res.json(thought);
            })
            .catch((err) => res.status(500).json(err));
    },

// Create a reaction
createReaction(req, res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { new: true, runValidators: true }
    )
        .then((thought) => {
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        })
        .catch((err) => res.status(500).json(err));
},
// Delete a reaction
        

};