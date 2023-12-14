const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/university')

const TableUser = mongoose.model('javascripts', {
    name: String,
    surname: String,
    email: String,
    password: String,
    age: Number
})
const TableSkills = mongoose.model('skills', {
    skill: String,
    area: String,
    level: Number
})

const ObjectId = mongoose.Types.ObjectId

module.exports = { TableUser, ObjectId, TableSkills }