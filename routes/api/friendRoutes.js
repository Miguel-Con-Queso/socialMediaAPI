const router = require('express').Router();
const {
    createFriend,
    deleteFriend,
} = require('../../controllers/friendControllers');

router
    .route('/')
    .post(createFriend);

router
    .route('/:id')
    .delete(deleteFriend);

module.exports = router;