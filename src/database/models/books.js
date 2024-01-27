const { DataTypes } = require('sequelize');
const sequelize = require('../conection');

const Books = sequelize.define ('Books', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

module.exports = Books