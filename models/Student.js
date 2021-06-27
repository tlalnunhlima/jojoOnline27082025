const mongoose = require('mongoose')

const Schema = mongoose.Schema

var uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new Schema({
    
    regn: {
        
        type: Number,
        
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
    
    emailId: {
        
        type: String
        
    },
    
    aadharNo: {
        
        type: String
        
    },
    
    batchSession: {
        
        type: String

    },
    
    gender: {
      
        type: String  
        
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
    
   studentFee: [
       
       {
       
       narrationInput: String,
       
       feeAmount: Number,
       
       dateofpayment: String,
       
       verifierId: {
        
        type: Schema.Types.ObjectId,
        
        ref: 'staff',
        
        required: true
        
    }
       
   }],
   
   studentExamFee: [
       
       {
       
       narrationInput: String,
       
       feeAmount: Number,
       
       dateofpayment: String,
       
       verifierId: {
        
        type: Schema.Types.ObjectId,
        
        ref: 'staff',
        
        required: true
        
    }
       
   }],
   
   
   studentOtherFee: [
       
       {
       
       narrationInput: String,
       
       feeAmount: Number,
       
       dateofpayment: String,
       
       remarks: String,
       
       verifierId: {
        
        type: Schema.Types.ObjectId,
        
        ref: 'staff',
        
        required: true
        
    }
       
   }],
   
   totalCourseFee: {
       
       type: Number,
       
       required: true
      
       
   },
   
   feeDiscount: {
       
       type: Number,
       
       required: true
      
       
   },
   
   feeAfterDiscount: {
       
       type: Number,
       
       required: true
       
   },
    
    
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