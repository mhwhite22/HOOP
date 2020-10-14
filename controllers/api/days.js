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
    const s = parseInt(req.body.sleep)
    const m = parseInt(req.body.meals)
    const e = parseInt(req.body.exercise)
    const b = parseInt(req.body.breaks)
    req.body.score = (((s*8)+(b*10)+(m*20)+(e*3))/2.1)
    console.log(req.body)
    const day = await Day.create(req.body);
    res.status(201).json(day);
}

