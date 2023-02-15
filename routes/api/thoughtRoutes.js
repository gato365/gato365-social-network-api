const router = require('express').Router();

const {
    createThought,
    getAllThoughts,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').delete(deleteThought).post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);



module.exports = router;