const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: Date,
    sleep: Number,
    breaks: Number,
    meals: Number,
    exercise: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Day', daySchema);