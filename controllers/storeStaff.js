const staff = require('../models/staff')


module.exports = async (req, res) => {
  
   if (req.body._id == '') {
     
        insertRecord(req, res);
   }
        else {
     
        updateRecord(req, res);
}
}

function insertRecord(req, res) {
   
   const newStaff = new staff({ 
      
      username: req.body.username,
      password: req.body.password
      
   })

  newStaff.save()
  
    .then(() => console.log('meow : data submitted successfully'))
    
    .catch(() => console.log('Problem occurs during data insertion'));
    
    res.redirect('/view/staffList')
  
}


function updateRecord(req, res) {
   
   staff.findOneAndUpdate({ _id: req.body._id}, req.body, { new: true }, (err, doc) => {
       
        if (!err) { res.redirect('/')
        
         console.log('miau miau updated')
           
        }
       
        else {
      
                console.log('Error during record update : ' + err);
      
        }
    });
}