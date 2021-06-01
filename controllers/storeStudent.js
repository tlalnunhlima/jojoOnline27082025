const Student = require('../models/Student')


module.exports = async (req, res) => {
   
   const jojo_Student = await new Student({ 
      
      regn: req.body.regn,
      name: req.body.name,
      fname: req.body.fname,
      address: req.body.address,
      phone: req.body.phone,
      password: req.body.password
   });

   jojo_Student.save().then(() => console.log('meow'));
   
   res.redirect('/')
};