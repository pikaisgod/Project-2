const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./models');
const app = express();

const homeRoutes = require('./routes/home');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const dashboardRoutes = require('./routes/dashboard');
const restockRoutes = require('./routes/restock');

// Session setup
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({
        db: db.sequelize
    }),
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up Handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ 
    defaultLayout: 'main',
    helpers: {
        json: function(context) {
            return JSON.stringify(context);
        }
    }
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Routes
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/home', homeRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/restock', restockRoutes);
app.get('/', (req, res) => res.redirect('/users/login')); // Redirect to login page by default

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
