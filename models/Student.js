const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    regn: {
        type: String,
        required: true,
        unique: true
    },
    name: {
       type: String,
       required: true
    },
    fname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
//password hash
UserSchema.pre('save', async function(next){
  try {
      const hashedPassword = await bcrypt.hash(this.password, 10)
        
        this.password = hashedPassword
        
        next()
  } catch(error) {
      next(error)
  }
})

//export model
const Student = mongoose.model('Student', UserSchema)

module.exports = Student