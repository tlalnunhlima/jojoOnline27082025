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
       
       dateofpayment: Date,
       
       dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    },
       
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
       
       dateofpayment: Date,
       
       dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    },
       
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
       
       dateofpayment: Date,
       
       remarks: String,
       
       dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    },
       
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
   
   assignmentTheory: [
       
       {
           
        subjectName: String,
        
        chapterName: String,
       
        mcq1: String,
       
        mcq2: String,
       
        mcq3: String,
       
        mcq4: String,
       
        mcq5: String,
        
        Scored: String,
        
        totalMark: String,
       
        dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    }
       
   }],
   
   assignmentTheory102: [
       
       {
           
        subjectName: String,
        
        chapterName: String,
       
        mcq1: String,
       
        mcq2: String,
       
        mcq3: String,
       
        mcq4: String,
       
        mcq5: String,
        
        Scored: String,
        
        totalMark: String,
       
        dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    }
       
   }],
   
   assignmentTheory103: [
       
       {
           
        subjectName: String,
        
        chapterName: String,
       
        mcq1: String,
       
        mcq2: String,
       
        mcq3: String,
       
        mcq4: String,
       
        mcq5: String,
        
        Scored: String,
        
        totalMark: String,
       
        dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    }
       
   }],
   
   assignmentTheory104: [
       
       {
           
        subjectName: String,
        
        chapterName: String,
       
        mcq1: String,
       
        mcq2: String,
       
        mcq3: String,
       
        mcq4: String,
       
        mcq5: String,
        
        Scored: String,
        
        totalMark: String,
       
        dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    }
       
   }],
   
   assignmentTheory105: [
       
       {
           
        subjectName: String,
        
        chapterName: String,
       
        mcq1: String,
       
        mcq2: String,
       
        mcq3: String,
       
        mcq4: String,
       
        mcq5: String,
        
        Scored: String,
        
        totalMark: String,
       
        dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    }
       
   }],
   
   assignmentTheory106: [
       
       {
           
        subjectName: String,
        
        chapterName: String,
       
        mcq1: String,
       
        mcq2: String,
       
        mcq3: String,
       
        mcq4: String,
       
        mcq5: String,
        
        Scored: String,
        
        totalMark: String,
       
        dateSubmitted: {
        
        type: Date,
        
        default: Date.now
        
    }
       
   }],
    
    
    datePosted: {
        
        type: Date,
        
        default: Date.now
        
    }
    
});



//duplicate checker
UserSchema.plugin(uniqueValidator);


//export model

const Student = mongoose.model('Student', UserSchema)

module.exports = Student