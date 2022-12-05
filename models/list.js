const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db.config');

class List extends Model {}

List.init({
    user_id: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    task: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
    },
    notes: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    due_date: {
        type: DataTypes.DATE,
    },
    
}, {
    sequelize,
    modelName: 'list',
});

module.exports = List