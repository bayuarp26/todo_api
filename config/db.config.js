const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('todolist','root','',{
    host: 'localhost',
    dialect: 'mysql'
    })

module.exports = sequelize;