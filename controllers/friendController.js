const { Thought, User } = require('../models');

const friendController = {
    addFriend({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: body } },
            { new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    removeFriend({ params }, res) {
        User.findOneAndDelete({ _id: params.userId })
            .then(deleteduser => {
                if (!deleteduser) {
                    return res.status(404).json({ message: 'No user with this id!' });
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { users: params.userId } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
        })
        .catch(err => res.json(err));
    }
};

module.exports = friendController;