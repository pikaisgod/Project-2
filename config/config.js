require('dotenv').config();

console.log('Database Configuration:', {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

module.exports = {
    development: {
        username: process.env.DB_USER || '',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || '',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: process.env.DB_DIALECT || 'postgres'
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres'
    }
};
