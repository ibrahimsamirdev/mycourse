const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

/* GET home page. */

router.get('/', homeController.getAll);
router.get('/:catagory', homeController.getByCatagory);
router.get('/:course_id', homeController.getById);

module.exports = router;