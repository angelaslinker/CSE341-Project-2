const validator = require('../helpers/validate');

const createMakeup = (req, res, next) => {

    const validationRule = {
        name: 'required|string',
        brand: 'required|string',
        price: 'required|string',
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    createMakeup
};