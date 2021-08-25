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
    .route('/:thoughtId')
    .delete(removeThought);

router 
    .route('/:thoughtId/reactions')
    .post(addReaction);

module.exports = router;