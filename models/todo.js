const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db.config');

class Todo extends Model {}

Todo.init({
    id_task: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.ENUM('done', 'undone'),
    }
}, {
    sequelize,
    modelName: 'todo',
});

module.exports = Todo;