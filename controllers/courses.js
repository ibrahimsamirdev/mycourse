const coursesService = require('../services/courses');

const getAll = async (req, res) => {
    console.log('In controller');
    const result = await coursesService.getAll(req, res);
    console.dir(result)
    res.status(200).send(result);
}

const getById = async (req, res) => {
    const result = await coursesService.getById(req.params.id)
    res.status(200).send(result);
}

const add = async (req, res, next) => {
    console.log('In ADD controller');
    try {
        const result = await coursesService.add(req, res)
        console.dir(result);
        res.status(200).send(result);}
    catch (err) {
        console.log('An error appeared...');
        throw err;
    }
}

const del = async (req, res) => {
    await coursesService.del(req.params.id);
    res.status(200).json({ "success": 1 })
}

const validateInput = (req, res, next) => {
    if (!req.body.course) {
        next({ msg: 'Course Name is required!' });
    }
    else if (!req.body.lecture) {
        next({ msg: 'Lecture Name is required!' });
    } else {
        next();
    }
}

module.exports = { getAll, getById, add, del, validateInput };