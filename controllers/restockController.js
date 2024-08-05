const { Product } = require('../models');

// Show restock page
const showRestockPage = async (req, res) => {
  if (!req.session.user) {
    return res.redirect('/users/login');
  }
  try {
    const products = await Product.findAll({ where: { userId: req.session.user.id } });
    res.render('restock', {
      username: req.session.user.username,
      products: products.map(product => product.toJSON())
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Handle restocking
const restockProduct = async (req, res) => {
  if (!req.session.user) {
    return res.redirect('/users/login');
  }
  try {
    const { productId, quantity } = req.body;
    const product = await Product.findByPk(productId);
    if (product && product.userId === req.session.user.id) {
      product.quantity += parseInt(quantity, 10);
      await product.save();
      res.redirect('/restock');
    } else {
      res.status(404).json({ error: 'Product not found or unauthorized' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { showRestockPage, restockProduct };
