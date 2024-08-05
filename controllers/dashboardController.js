const showDashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/users/login');
    }

    res.render('dashboard', { user: req.session.user });
};

module.exports = { showDashboard };
