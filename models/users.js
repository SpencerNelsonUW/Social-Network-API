const { Schema, Types } = require("mongoose");

const UsersSchema = new Schema({
    username: { type: String, unique: true, required: true},
    email: {type: String, required: true, unique: true},
    thoughts: [{type: Schema.Types.ObjectId, ref: "Thoughts",},],
    friends: [{ type: Schema.Types.ObjectId, ref: "Users",},],
  },
);

// get total count of friends
UsersSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the Users model using the Users Schema
const Users = model("Users", UsersSchema);

// Export Users module
module.exports = Users;
