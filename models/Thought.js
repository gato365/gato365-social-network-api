// Declare Schema and Types from Mongoose
const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
    // Define the fields for the Thought model
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // get: (createdAtVal) => dateFormat(createdAtVal),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        // Use getters and virtuals when data is requested
        toJSON: {
            virtuals: true,
            getters: true,
        },
        // Prevent virtuals from creating duplicate of _id as `id`
        id: false,
    });


const Thought = model('Thought', thoughtSchema);
module.exports = Thought;