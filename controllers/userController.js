const { User } = require('../models');

// Show login form
const showLoginForm = (req, res) => {
  res.render('users/login');
};

// Handle user login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user && user.password === password) {
      req.session.user = user;
      res.redirect('/home'); // Redirect to home or desired page
    } else {
      res.render('users/login', { error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Show register form
const showRegisterForm = (req, res) => {
  res.render('users/register');
};

// Handle user registration
const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await User.create({ username, email, password });
    req.session.user = newUser;
    res.redirect('/home'); // Redirect to home or desired page
  } catch (error) {
    res.status(500).json(error);
  }
};

// User logout
const logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json(err);
    }
    res.redirect('/users/login');
  });
};

module.exports = { showLoginForm, login, showRegisterForm, register, logout };
