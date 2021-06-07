const bcrypt = require('bcrypt')

const staff = require('../models/staff')



//staff login authorization
module.exports = (req, res) => {
    
    const { username, password } = req.body;
    
    staff.findOne({username: username}, (error, staff) => {
        
        if(staff) {
            
            console.log('staff found')
            
            bcrypt.compare(password, staff.password, (error, same) => {
                
                if(same) {
                    
                    console.log('staff password matched')
                    
                    req.session.userId = staff._id
                    
                    res.redirect('/')
                    
                } else {
                    
                    console.log('password not match')
                    
                    res.redirect('/auth/loginStaff')
                }
            })
            
        } else {
            
            console.log('no staff found')
            
            res.redirect('/auth/loginStaff')
        }
    })
}