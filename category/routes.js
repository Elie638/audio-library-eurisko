const express = require('express');

const categoryController = require('./controller')

const router = express.Router();

router.post('/create', categoryController.create);

module.exports = router;