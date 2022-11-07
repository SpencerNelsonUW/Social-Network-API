const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionBody:{type:String, required:true},
    username:{type:String, required:true},
})

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type:String, required:true},
    username:{type:String, required:true},
    reactions:[reactionSchema],
    reactionCount:{}
})

const friendSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String},
})

const userSchema = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, required:true},
    thoughts:[thoughtSchema],
    friends:[friendSchema],
    friendCount:{}
})

module.exports = Users;