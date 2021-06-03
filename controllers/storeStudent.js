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
   
   const student = new Student({ 
      
      regn: req.body.regn,
      name: req.body.name,
      fname: req.body.fname,
      address: req.body.address,
      phone: req.body.phone,
      password: req.body.password
      
   })

   student.save().then(() => console.log('meow'));
   
   res.redirect('/')
}


function updateRecord(req, res) {
   
   Student.findOneAndUpdate({ _id: req.body._id}, req.body, { new: true }, (err, doc) => {
       
        if (!err) { res.redirect('/')
        
         console.log('miau miau updated')
           
        }
       
        else {
      
                console.log('Error during record update : ' + err);
      
        }
    });
}