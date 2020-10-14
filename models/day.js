const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const daySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {type: Date, unique: true },
    sleep: Number,
    breaks: Number,
    meals: Number,
    score: Number,
    exercise: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Day', daySchema);