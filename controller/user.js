const user = require('../models/data')
const mysql2 = require('mysql2');
const { where } = require('sequelize');


module.exports = {
    //get all users
    server: async (req, res) => {
        try {
            const users = await user.findAll()
            res.json({
                status : true,
                data : users,
                methode : req.method,
                url : req.url,
                message: 'User fetched successfully'
            })
        } catch (error) {
            res.status(400).json({sucess:false})
        }
    },
 //get user by id
    show: async (req, res) => {
        try {
            const users = await user.findOne({
                where: {
                    id: req.params.id
                }
            })
            res.json({
                status : true,
                data : users,
                methode : req.method,
                url : req.url,
                message: 'User fetched successfully'
            })
        } catch (error) {
            res.status(400).json({sucess:false})
        }
    },

    store: async (req, res) => {
        try {
            const {id, nama, password, title, description, parameter} = req.body
            const users = await user.create({
                id,
                nama,
                password,
                title,
                description,
                parameter
            })
            res.json({
                status : true,
                data : users,
                methode : req.method,
                url : req.url,
                message: 'User created successfully'
            })
        } catch (error) {
            res.status(400).json({sucess:false})
        }
    },

    update: async (req, res) => {
        try {
            const {id, title, description, parameter} = req.body
            const users = await user.update({
                title,
                description,
                parameter
            },{
                 
                where: {
                    id: req.params.id,
                    
                }
        })
            res.json({
                status : true,
                data : users,
                title,
                description,
                parameter,
                methode : req.method,
                url : req.url,
                message: 'User updated successfully'
            })
        } catch (error) {
            res.status(400).json({sucess:false})
        }
        const id = req.params.id
    },

    junk: async (req, res) => {
        try {
            const users = await user.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json({
                status : true,
                data : users,
                methode : req.method,
                url : req.url,
                message: 'User deleted successfully'
            })
        } catch (error) {
            res.status(400).json({sucess:false})
        }
    }

}