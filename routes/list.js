const express = require('express')
const cors = require('cors')
const router = express.Router()
const ListModel = require('../models/list')
const bcrypt = require('bcrypt')
const passwordCheck = require('../utils/passwordCheck')


//routing end points

router.get('/', async (req, res) => {
    const list = await ListModel.findAll()
    res.status(200).json({
        data: list,
        metadata: "test list endpoint"
    })
})


router.post('/', async (req, res) => {
    const { id, user_id, password, task, title, notes, status, due_date } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    const list = await ListModel.create({
        id: id,
        user_id: user_id,
        password: encryptedPassword,
        task: task,
        title: title,
        notes: notes,
        status: status,
        due_date: due_date
    })
    res.status(200).json({
        data: list,
        metadata: "tugas berhasil ditambahkan"
    })
})

// put task by id
router.put('/task', async (req, res) => {
    const { task, title, notes, status, due_date } = req.body
    const check = await listCheck(task)

    if (check.compare === true) {
    const list = await ListModel.update({
            task, title, notes, status, due_date 

    }, { where: { task: task } 
    })

    res.status(200).json({
        data: list,
        metadata: "tugas berhasil diupdate"
    })
    } else {
        res.status(400).json({
            data: null,
            metadata: "tugas tidak ditemukan"
        })
    }
})

//put user_id by id
router.put('/user_id', async (req, res) => {
    const { user_id, password, task, title, notes, status, due_date } = req.body
    const check = await listCheck(user_id, password)
    const encryptedPassword = await bcrypt.hash(password, 10)
    if(check.compare === true) {
    const list = await ListModel.update({
            user_id, password: encryptedPassword
    }, { where: { user_id: user_id }
}) 
res.status(200).json({
        data: list,
        metadata: "user berhasil diupdate"
    })
    } else {
        res.status(400).json({
            data: null,
            metadata: "user tidak ditemukan"
        })
    }
})


router.post('/login', async (req, res) => {
    const { user_id, password } = req.body
    const check = await passwordCheck(user_id, password)
    if (check.compare === true) {
        res.status(200).json({
            data: null,
            metadata: "login berhasil"
        })
    } else {
        res.status(400).json({
            data: null,
            metadata: "login gagal"
        })
    }
})



router.delete('/', async (req, res) => {
    const { task } = req.body
    const check = await listCheck(task)

    if (check.compare === true) {
    const list = await ListModel.destroy({
            where: { task: task }
    })

    res.status(200).json({
        data: list,
        metadata: "tugas berhasil dihapus"
    })
    } else {
        res.status(400).json({
            data: null,
            metadata: "tugas tidak ditemukan"
        })
    }
})

module.exports = router
