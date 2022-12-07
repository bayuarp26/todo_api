const express = require('express')
const app = express()
const port = 3400
const router = require('./router/users')

const sequelize = require('./config/db.config')
sequelize.sync().then(() => console.log('database ready!'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
