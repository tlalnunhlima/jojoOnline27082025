const Student = require('../models/Student')

module.exports = async (req, res) => {
  
   if (req.body._id == '') {
     
        insertRecord(req, res);
        
   } 
   
    else {
            
        updateRecord(req, res);
        
    }
    
}




function insertRecord(req, res) {
   
   const newStudent = new Student({
      
      regn: req.body.regn,
      
      studentIdentity: 'computerStudent',
      
      username: req.body.username,
      
      fname: req.body.fname,
      
      address: req.body.address,
      
      phone: req.body.phone,
      
      dob: req.body.dob,
      
      emailId: req.body.emailId,
      
      aadharNo: req.body.aadharNo,
      
      batchSession: req.body.batchSession,
      
      gender: req.body.gender,
      
      staffid: req.session.userId,
      
      myDashboard: ['My Dashboard', 'My Scoreboard', 'Logout'],
      
      hrefLink: ['/all/stdDashboard', '/all/stdScoreboard'],
      
      studentFee: [],
      
      studentExamFee: [],
      
      assignmentTheory: [],
      
      totalCourseFee: 9000,
      
      feeDiscount: 2000,
      
      feeAfterDiscount: 7000
          
   });

  

               newStudent.save()
              
                .then(() => {
                    
                    console.log('meow : student data submitted successfully');
                    
                    res.redirect('/stdList');
                    
                })
                
                .catch((error) => { 
                
                    const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message);
                    
                    req.flash('validationErrors', validationErrors);
                
                
                return res.render('register', {
                    
                    viewTitle: 'Register Student',
                    
                    errors: 'Registration Number hi a awm tawh!',
                    
                    students: req.body
                    
                    
                    });
                
                });

  
    }




function updateRecord(req, res) {
    
   
  Student.findOneAndUpdate({ _id: req.body._id}, req.body, { new: true }, (error, doc) => {
       
        if (doc) { res.redirect('/stdList')
        
         console.log('miau miau student details updated')
         
        } if(error) {
            
                res.redirect('/stdList')
                
                console.log('Error during student record update : ' + error);
      
        }
        
    });
    
}