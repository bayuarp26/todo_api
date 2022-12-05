const express = require('express')
const router = express.Router()
const cors = require('cors')
const TodoModel = require('../models/todo')


//routing end points
router.get('/', async (req, res) => {
    const todo = await TodoModel.findAll()
    res.status(200).json({
        data: todo,
        metadata: "test todo endpoint"
    })
})

router.post('/check_task', async (req, res) => {
    const { task } = req.body
    const todo = await TodoModel.create({
            id_task: task, 
            status: 'done'
    })
    res.status(200).json({
        data: todo,
        metadata: "tugas berhasil ditambahkan"
    })
})

router.post('/update_task', async (req, res) => {
    const { task } = req.body
    const todo = await TodoModel.update({
            id_task: task ,
            status: 'undone'
    })

    res.status(200).json({
        data: todo,
        metadata: "tugas berhasil diupdate"
    })
})

module.exports = router