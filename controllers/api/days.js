const Day = require('../../models/day');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
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
    req.body.score = (((s*8)+(b*10)+(m*20)+(e*2.1))/2.35)
    const day = await Day.create(req.body);
    res.status(201).json(day);
}

async function deleteOne(req, res) {                                                                                             
    console.log('delete ctrl')
    const deletedDay = await Day.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedDay);
}

async function update(req, res) {
    const updatedDay = await Day.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedDay);
}