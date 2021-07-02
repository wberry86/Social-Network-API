const { Schema, model } = require('mongoose');
const { stringify } = require('qs');

// add schema models here

const UserSchema = new Schema(
    {
     userName: {
        type: String,
        unique: true,
        required: true,
        trim: true
     },
     email: {
         type: String,
         required: true,
         unique: true,
         match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid Password"]
     },
     thoughts: [{
         type: Schema.Types.ObjectId,
         ref: 'Thought'
     }],
     friends: [{
         type: Schema.Types.ObjectId,
         ref: 'User'
     }]


})

// plug in virtual
// this will be used in routes
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;