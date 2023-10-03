const express = require('express');
const router = express.Router();

const usersController = require('../controllers/skincare');
const validation = require('../middleware/validate');

const skincarecontroller = require('../controllers/skincare'); // Fix the typo here

const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', skincarecontroller.getAllSkincare);
router.get('/:id', skincarecontroller.getSingleSkincare);
router.post('/', isAuthenticated, skincarecontroller.createSkincare);
router.put('/:id', isAuthenticated, skincarecontroller.updateSkincare);
router.delete('/:id', isAuthenticated, skincarecontroller.deleteSkincare);

module.exports = router;
