const { Reaction } = require('../models');

const reactionController = {
    // Create a Reaction
  createReaction({ body }, res) {
    Reaction.create(body)
      .then((dbReactionData) => res.json(dbReactionData))
      .catch((err) => res.status(400).json(err));
  },

  // DELETE to remove a Reaction by its _id
  deleteReaction({ params }, res) {
    Reaction.findOneAndDelete({ _id: params.id })
      .then(dbReactionData => {
        if (!dbReactionData) {
          res.status(404).json({ message: 'No Reaction found with this id!' });
          return;
        }
        res.json(dbReactionData);
      })
      .catch(err => res.status(400).json(err));
  }

};

module.exports = reactionController;