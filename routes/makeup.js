const express = require('express');
const router = express.Router();

const usersController = require('../controllers/makeup');
const validation = require('../middleware/validate');

const makeupController = require('../controllers/makeup');

// router.get('/', makeupController.getAll);

// router.get('/:id', makeupController.getSingle);

// router.post('/', makeupController.createMakeup);

// router.put('/:id', makeupController.updateMakeup);

// router.delete('/:id', makeupController.deleteMakeup);

// module.exports = router;




router.get('/', makeupController.getAll);


router.get('/:id', makeupController.getSingle);


router.post('/', validation.createMakeup, makeupController.createMakeup);


router.put('/:id', validation.createMakeup, makeupController.updateMakeup);


router.delete('/:id', makeupController.deleteMakeup);


module.exports = router;