const express = require('express');
const router = express.Router();

const usersController = require('../controllers/makeup');
const validation = require('../middleware/validate');

const makeupController = require('../controllers/makeup');

const { isAuthenticated } = require("../middleware/authenticate");


router.get('/', makeupController.getAll);


router.get('/:id', makeupController.getSingle);


router.post('/', isAuthenticated, makeupController.createMakeup);


router.put('/:id', isAuthenticated, makeupController.updateMakeup);


router.delete('/:id', isAuthenticated, makeupController.deleteMakeup);


module.exports = router;