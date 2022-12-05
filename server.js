const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')
const port = 3400

const sequelize = require('./db.config')
sequelize.sync().then(() => console.log('database ready!'))

const listEndpoint = require('./routes/list')
const todoEndpoint = require('./routes/todo')
const app = express()
app.use(cors())
app.use(express.json())

app.use('/lists', listEndpoint)
app.use('/todos', todoEndpoint)

app.listen(port, () => console.log(`running server on port ${port}`))