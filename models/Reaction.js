// Get Schema and Types from Mongoose
const { Schema, Types } = require('mongoose');

// Create a reactionSchema
const reactionSchema = new Schema(
    // Define the fields for the reactionSchema
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal)
        }

    },
    {
        // Use getters and virtuals when data is requested
        toJSON: {
            getters: true
        },
        // Prevent virtuals from creating duplicate of _id as `id`
        id: false
    }

);

const Reaction = model('Reaction', reactionSchema);

// Export the reactionSchema
module.exports = Reaction;