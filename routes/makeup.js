const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

const makeupController = require('../controllers/makeup');

// Validation middleware for POST and PUT routes
const validateMakeup = [
    body('name').notEmpty().withMessage('Name is required'),
    body('brand').notEmpty().withMessage('Brand is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
    // Add more validation rules for your fields here
];

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

router.get('/', makeupController.getAll);

router.get('/:id', makeupController.getSingle);

router.post('/', validateMakeup, handleValidationErrors, makeupController.createMakeup);

router.put('/:id', validateMakeup, handleValidationErrors, makeupController.updateMakeup);

router.delete('/:id', makeupController.deleteMakeup);

module.exports = router;
