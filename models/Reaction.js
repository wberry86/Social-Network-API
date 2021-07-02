const { Schema, model } = require('mongoose');
const { stringify } = require('qs');

// add schema models here

const ReactionSchema = new Schema(
    {
     reactionId: {
        type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
     },
     reactionBody: {
         type: String,
         required: true,
         maxLength: 280
     },
     userName: {
         type: String,
         required: true
     },
     createdAt: {
         type: Date,
         default: Date.now 
         // Use a getter method to format the timestamp on query
     }


})

// plug in virtual
// this will be used in routes


const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;