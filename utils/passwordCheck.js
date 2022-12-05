const bcrypt = require('bcrypt')
const ListModel = require('../models/list')

const passwordCheck = async (user_id, password) => {
    const list = await ListModel.findOne({
        where: {
            user_id: user_id
        }
    })
    const compare = await bcrypt.compare(password, list.password)
    return {
        compare: compare,
    }}
module.exports = passwordCheck  
