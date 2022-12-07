const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('db_data','root','',{
    host: 'localhost',
    dialect: 'mysql'
    })

module.exports = sequelize;
