const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction
} = require('../../controllers/thoughtController');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:id')
    .get(getThoughtById);

router
    .route('/:userId')
    .post(addThought);

router
    .route('/:userId/:id')
    .delete(removeThought);

router 
    .route('/:thoughtId/reactions')
    .put(addReaction);

module.exports = router;