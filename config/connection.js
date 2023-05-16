const Sequelize = require('sequelize');
require('dotenv').config(); // Allows us to use environment variables in .env file

const sequelize = process.env.JAWSDB_URL
    ? new Sequelize(process.env.JAWSDB_URL) //JAWSDV_URL is for Heoku deployment
    : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {//local
        host: 'localhost',
        dialect: 'mysql',
        dialectOptions: {
            decimalNumbers: true,
        },
    });

module.exports = sequelize;