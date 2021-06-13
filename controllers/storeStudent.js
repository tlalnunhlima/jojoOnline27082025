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
      
      username: req.body.username,
      
      fname: req.body.fname,
      
      address: req.body.address,
      
      phone: req.body.phone,
      
      dob: req.body.dob,
      
      staffid: req.session.userId,
      
      myDashboard: ['My Dashboard', 'My Scoreboard', 'My Fee Details', 'Logout'],
      
      hrefLink: ['/all/stdDashboard', '/all/testResult', '/feeDetails']
      
     
   });

   newStudent.save()
  
    .then(() => console.log('meow : student data submitted successfully'))
    
    .catch(() => console.log('Problem occurs during data insertion'))
    
    res.redirect('/stdList')
}


function updateRecord(req, res) {
   
  Student.findOneAndUpdate({ _id: req.body._id}, req.body, { new: true }, (err, doc) => {
       
        if (!err) { res.redirect('/stdList')
        
         console.log('miau miau student details updated')
           
        }
       
        else {
      
                console.log('Error during score record update : ' + err);
      
        }
        
    });
    
}