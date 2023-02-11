// State the Schema and Types for the User model
const { Schema, Types } = require('mongoose');

// State the Schema and Types for the User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [friendSchema]
    },
    {
        toJSON: {},
        id: false,
    }
);


module.exports = userSchema;