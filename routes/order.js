const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/users/login');
    }
};

router.get('/', isAuthenticated, orderController.getOrders);
router.get('/add', isAuthenticated, (req, res) => {
    res.render('orders/addOrder', { title: 'New Order' });
});
router.get('/', orderController.getOrders);
router.post('/add', orderController.addOrder);
router.get('/:id/edit', orderController.getOrder);
router.post('/:id/edit', orderController.updateOrder);
router.post('/:id/delete', orderController.deleteOrder)

module.exports = router;
