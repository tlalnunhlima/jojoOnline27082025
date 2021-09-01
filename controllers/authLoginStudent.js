const Student = require('../models/Student')



//student login authorization

module.exports = (req, res) => {
    
    const { phone, dob } = req.body;
    
    Student.find({phone: phone, dob: dob})
    
    .then((Std) => {
                    
                    console.log('meow : student found');
                    
                    //console.log(Std);
                    
                    req.session.userId = Std[0]._id,
                    
                    req.session.username = Std[0].username,
                    
                    req.session.studentIdentity = Std[0].studentIdentity,
                   
                    req.session.myDashboard1 = Std[0].myDashboard[0],
                    
                    req.session.myDashboard2 = Std[0].myDashboard[1],
                    
                    req.session.myDashboard3 = Std[0].myDashboard[2],
                    
                    req.session.hrefLink1 = Std[0].hrefLink[0],
                    
                    req.session.hrefLink2 = Std[0].hrefLink[1],
                    
                    req.session.assignmentArray = Std[0].assignmentTheory,
                    
                    req.session.studentFee = Std[0].studentFee,
                    req.session.studentExamFee = Std[0].studentExamFee,
                    req.session.studentOtherFee = Std[0].studentOtherFee,
                    
                    res.redirect('/all/stdDashboard')

                    })
                    
    .catch(() => { 
                
    
        return res.render('studentLogin', {
                
                errors: 'Username or password incorrect!',
        
                students: req.body
                    
                    
                    });
                
 
                })
                
}