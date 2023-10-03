const router = require('express').Router();
const passport = require('passport');
router.use('/', require('./swagger'));

router.unsubscribe("/makeup", require("./makeup"));

router.use('/makeup', require('./makeup'));

router.unsubscribe("/skincare", require("./skincare"));

router.use('/skincare', require('./skincare'));

router.get('/login', passport.authenticate('github'), (req, res) => { });

router.get('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('./');
    });
});

module.exports = router;