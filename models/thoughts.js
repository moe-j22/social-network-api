const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the reaction schema
const reactionSchema = new Schema({
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define the thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  // Remove the get property for createdAt
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Reference the defined reactionSchema
});

// Export the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

// Export the Reaction schema for use in other models/controllers
module.exports = { Thought, reactionSchema };
