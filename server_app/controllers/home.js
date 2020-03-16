const homeService = require('../services/home');

const getAll = async (req, res) => {
    const result = await homeService.getAll(req, res);
    // console.dir(result)
    res.status(200).send(result);
}
const getById = async (req, res) => {
    const result = await homeService.getById(req, res)
    res.status(200).send(result);
}
const getByCatagory = async (req, res) => {
    const result = await homeService.getById(req, res)
    res.status(200).send(result);
}
module.exports = { getAll, getByCatagory, getById };