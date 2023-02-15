const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    deleteThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought);


module.exports = router;