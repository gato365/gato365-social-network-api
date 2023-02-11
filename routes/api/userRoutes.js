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



module.exports = router;