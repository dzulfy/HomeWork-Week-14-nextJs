const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    password: '12345678',
    host: 'localhost',
    port: 5432,
    database: 'test_next'
})

module.exports = sequelize