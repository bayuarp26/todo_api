const express = require('express')
const router = express.Router()


const modals = require('../controller/user')


router.get('/users', modals.server)

router.post('/user', modals.store)

router.get('/user/:id', modals.show)

router.put('/user/:id', modals.update)

router.delete('/user/:id', modals.junk)

module.exports = router