const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);



module.exports = router;