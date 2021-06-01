const bcrypt = require('bcrypt')

const Student = require('../models/Student')

module.exports = (req, res) => {
    
    const { username, password } = req.body;
    
    Student.findOne({name: username}, (error, std) => {
        if(std) {
            console.log('std found')
            bcrypt.compare(password, std.password, (error, same) => {
                if(same) {
                    console.log('password matched')
                    res.redirect('/')
                } else {
                    console.log('password not match')
                    res.redirect('/login')
                }
            })
        } else {
            console.log('no std found')
            res.redirect('/login')
        }
    })
}