const mongoose = require('mongoose')

const Schema = mongoose.Schema

var uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    
    regn: {
        
        type: String,
        
        required: [true, 'Please provide regn no'],
        
        unique: true
        
    },
    
    studentIdentity: {
        
       type: String
       
    },
    
    username: {
        
       type: String,
       
       required: [true, 'Please provide name']
       
    },
    
    fname: {
        
        type: String,
        
        required: [true, 'Please provide fname']
        
    },
    
    address: {
        
        type: String,
        
        required: [true, 'Please provide address']
        
    },
    
    phone: {
        
        type: String,
        
        required: [true, 'Please provide phone']
        
    },
    
    dob: {
        
        type: String,
        
        required: [true, 'Please provide DOB']
        
    },
    
    staffid: {
        
        type: Schema.Types.ObjectId,
        
        ref: 'staff',
        
        required: true
        
    },
    
    myDashboard: [{
       
       type: String
        
    }],
    
    hrefLink: [{
       
       type: String
        
    }],
    
    
    
    datePosted: {
        
        type: Date,
        
        default: new Date()
        
    }
});

//duplicate checker
UserSchema.plugin(uniqueValidator);


//export model
const Student = mongoose.model('Student', UserSchema)

module.exports = Student