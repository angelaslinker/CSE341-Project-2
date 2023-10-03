const isAuthenticated = (req, res, next) => {
    if (req.session.user === undefined) {
        // Redirect to a login page or another appropriate page for authentication
        return res.redirect('/login'); // Change '/login' to the actual login route
    }
    next();
};

module.exports = {
    isAuthenticated
}