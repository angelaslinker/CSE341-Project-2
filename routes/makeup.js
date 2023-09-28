const express = require('express');
const router = express.Router();

const makeupController = require('../controllers/makeup');

router.get('/', makeupController.getAll);

router.get('/:id', makeupController.getSingle);

router.post('/', makeupController.createMakeup);

router.put('/:id', makeupController.updateMakeup);

router.delete('/:id', makeupController.deleteMakeup);

module.exports = router;