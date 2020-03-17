const express = require('express');
const homeRouter = express.Router();
const coursesConthomeControllerroller = require('../controllers/home');

homeRouter.get('/', homeController.getAll);

homeRouter.get('/:catagory', homeController.getByCatagory);

module.exports = homeRouter;
