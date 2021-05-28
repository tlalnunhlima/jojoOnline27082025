const User = require('../models/User')


module.exports = async (req, res) => {
   User.create(req.body, (req, res) =>{
     console.log(req.body)
     
   })
   res.redirect('/')
}