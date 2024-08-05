const { Order, Product } = require('../models');

// Show home page
const showHomePage = async (req, res) => {
  if (!req.session.user) {
    return res.redirect('/users/login');
  }
  try {
    const orders = await Order.findAll({ where: { userId: req.session.user.id } });
    const products = await Product.findAll({ where: { userId: req.session.user.id } });
    res.render('home', {
      user: req.session.user,
      orders: orders.map(order => order.toJSON()),
      products: products.map(product => product.toJSON())
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { showHomePage };
