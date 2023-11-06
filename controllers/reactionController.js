const Thought = require('../models/reactions');

const reactionController = {
  // Create a reaction for a thought
  createReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      thought.reactions.push(req.body);
      await thought.save();
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Remove a reaction by ID
  deleteReaction: async (req, res) => {
    try {
      const thought = await Thought.findById(req.params.thoughtId);
      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      }
      thought.reactions = thought.reactions.filter(
        (reaction) => reaction.reactionId.toString() !== req.params.reactionId
      );
      await thought.save();
      res.json(thought);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = reactionController;
