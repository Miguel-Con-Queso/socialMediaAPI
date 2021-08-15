const router = require('express').Router();
const {
    createReaction,
    deleteReaction
} = require('../../controllers/reactionController');

router
    .router('/')
    .post(createReaction);

router
    .router('/:id')
    .delete(deleteReaction);

module.exports = router