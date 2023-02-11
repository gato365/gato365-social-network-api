const router = require('express').Router();

const {
    createUser,
    getUsers,
    getSinlgeUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');



// Set up GET all and POST at /api/users
// /api/users
router.route('/').get(getUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/users/:id
router.route('/:id').get(getSinlgeUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;