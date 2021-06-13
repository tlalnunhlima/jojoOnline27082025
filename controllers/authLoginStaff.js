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
                    
                    req.session.username = staff.username,
                    
                    req.session.myDashboard1 = staff.myDashboard[0],
                    
                    req.session.myDashboard2 = staff.myDashboard[1],
                    
                    req.session.myDashboard3 = staff.myDashboard[2],
                    
                    req.session.myDashboard4 = staff.myDashboard[3],
                    
                    req.session.hrefLink1 = staff.hrefLink[0],
                    
                    req.session.hrefLink2 = staff.hrefLink[1],
                    
                    req.session.hrefLink3 = staff.hrefLink[2],
                    
                    
                    res.redirect('/stdList')
                    
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