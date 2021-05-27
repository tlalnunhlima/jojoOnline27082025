const User = require('../models/User')
const path = require('path')

module.exports = async (req, res) => {
    const newStudent = new User({
        regn: req.body.regn,
        name: req.body.name,
        fname: req.body.fname,
        adddress: req.body.address,
        phone: req.body.phone
    }) 
    await newStudent.save().then(() => console.log('meow'));
}