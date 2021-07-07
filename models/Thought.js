const { Schema, model } = require('mongoose');
const { stringify } = require('qs');
const reactionSchema = require('./Reaction');

// add schema models here

const ThoughtSchema = new Schema(
    {
     thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280   
     },
     createdAt: {
         type: Date,
         default: Date.now 
         // Use a getter method to format the timestamp on query
         
     },
     userName: {
         type: String,
         required: true
     },
     reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
});

// plug in virtual
// this will be used in routes
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;