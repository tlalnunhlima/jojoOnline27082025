const Student = require('../models/Student')

module.exports = (req, res) => {
    
    const { phone, dob } = req.body;
    
    Student.findOne({phone: phone}, (error, std) => {
        
        if(std) {
            
            console.log('std found')
            
            Student.findOne({dob: dob}, (error, same) => {
                
                if(same) {
                    
                    console.log('student password matched')
                    
                    req.session.userId = std._id
                    
                    req.session.username = std.username,
                    
                    req.session.studentIdentity = std.studentIdentity,
                    
                    req.session.myDashboard1 = std.myDashboard[0],
                    
                    req.session.myDashboard2 = std.myDashboard[1],
                    
                    req.session.myDashboard3 = std.myDashboard[2],
                    
                    req.session.myDashboard4 = std.myDashboard[3],
                    
                    req.session.hrefLink1 = std.hrefLink[0],
                    
                    req.session.hrefLink2 = std.hrefLink[1],
                    
                    req.session.hrefLink3 = std.hrefLink[2],
                    
                    res.redirect('/all/stdDashboard')
                    
                } else {
                    
                    console.log('password not match')
                    
                    res.redirect('/studentLogin')
                }
            })
            
        } else {
            
            console.log('no std found')
            
            res.redirect('/studentLogin')
        }
    })
}