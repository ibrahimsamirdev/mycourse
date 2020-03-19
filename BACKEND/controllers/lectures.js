const lecturesService = require('../services/lectures');

const getAll = async (req, res) => {
    const results = await lecturesService.getAll()
    res.status(200).send(results);
}

const getByCourseId = async (req, res) => {
    const result = await lecturesService.getByCourseId(req, res)
    res.status(200).send(result);
}

const getById = async (req, res) => {
    const result = await lecturesService.getById(req.params.id)
    res.status(200).send(result);
}

const add = async (req, res, next) => {
    if (req.body.lecture) {
        const lecture = req.body.lecture;
        req.body = JSON.parse(lecture);
        if (req.file && req.file.filename) { 
            req.body.video = req.file.filename; 
        };
    }

    try {
        console.log('Adding lecture');
        // console.log(req);
        const result = await lecturesService.add(req, res)
        res.status(200).send(result);}
    catch (err) {
        console.log('An error appeared...');
        throw err;
    }
}

const del = async (req, res) => {
    await lecturesService.del(req.params.id);
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

module.exports = { getAll, getByCourseId, getById, add, del, validateInput };