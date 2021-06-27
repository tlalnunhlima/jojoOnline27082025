const Student = require('../models/Student')

module.exports = async (req, res) => {

        insertFeeRecord(req, res);
 
    
}


function insertFeeRecord(req, res) {
    
    var examFeePaymentArray = {narrationInput: req.body.narrationInput, feeAmount:req.body.feeAmount, dateofpayment:req.body.dateofpayment, verifierId: req.session.userId};
    
        Student.findOneAndUpdate({ _id: req.body._id }, 
               
               {$push: {studentExamFee: examFeePaymentArray }}, { new: true },
               
                      function (error, success) {
                          
                            if (error) {
                                
                                console.log('Error during exam fee record update : ' + error);
                                
                            } else {
                                
                                res.redirect(`/computer/${req.body._id}`)
        
                                console.log('exam fee payment updated - miau miau')
                                

                            }
                    
                });
                
            }
            
