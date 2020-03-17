const enrollsService = require('../services/enrolls');

const getAll = async (req, res) => {
    const results = await enrollsService.getAll(req.params.uid)
    res.status(200).send(results);
}

const getById = async (req, res) => {
    const result = await enrollsService.getById(req.params.uid, req.params.id)
    res.status(200).send(result);
}

const add = async (req, res) => {
    await enrollsService.add(req.params.uid, req.body)
    res.status(200).json({ success: 1 });
}

const del = async (req, res) => {
    await enrollsService.del(req.params.uid, req.params.id)
    res.status(200).json({ success: 1 })
}

const updateEnrollLecture = async (req, res) => {
    await enrollsService.updateEnrollLecture(req.params.uid, req.params.cid, req.params.id)
    res.status(200).json({ success: 1 })
}

const validateInput = (req, res, next) => {
    next();
    // if (!req.body.course) {
    //     next({ msg: 'Course Name is required!' });
    // }
    // else if (!req.body.lecture) {
    //     next({ msg: 'Lecture Name is required!' });
    // } else {
    //     next();
    // }
}

module.exports = { getAll, getById, add, del, updateEnrollLecture, validateInput };