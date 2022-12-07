
const sequelize = require('../config/db.config')
const {DataTypes} = require('sequelize')
const todolist = sequelize.define('todolist', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nama: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parameter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'todolist'
});
module.exports = todolist;
