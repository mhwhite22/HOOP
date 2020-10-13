const Day = require('../../models/day');

module.exports = {
    index,
    create
};

async function index(req, res) {
    const days = await Day.find({});
    res.status(200).json(days);
}

async function create(req, res) {
    const day = await Day.create(req.body);
    res.status(201).json(day);
}