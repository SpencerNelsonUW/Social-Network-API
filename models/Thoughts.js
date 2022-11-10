const { Schema, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
  reactionBody: { type: String, required: true },
  username: { type: String, required: true },
});

const thoughtSchema = new Schema({
  thoughtText: { type: String, required: true },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

// get total count of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// create the Thoughts model using the Thoughts Schema
const Thoughts = model("Thoughts", thoughtSchema);

// Export Thoughts Module
module.exports = Thoughts;
