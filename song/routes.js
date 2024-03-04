const express = require('express');

const songController = require('./controller')

const router = express.Router();

router.post('/create', songController.create);
router.delete('/delete', songController.delete);

module.exports = router;