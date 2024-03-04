const express = require('express');

const albumController = require('./controller')

const router = express.Router();

router.post('/create', albumController.create);
router.put('/update', albumController.update);
router.get('/read:id', albumController.read);
router.delete('/delete', albumController.delete);
router.get('/readall', albumController.readAll);

module.exports = router;