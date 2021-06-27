const Student = require('../models/Student')

module.exports = async (req, res) => {

        insertFeeRecord(req, res);
 
    
}


function insertFeeRecord(req, res) {
    
    var feePaymentArray = {narrationInput: req.body.narrationInput, feeAmount:req.body.feeAmount, dateofpayment:req.body.dateofpayment, verifierId: req.session.userId};
    
        Student.findOneAndUpdate({ _id: req.body._id }, 
               
               {$push: {studentFee: feePaymentArray }}, { new: true },
               
                      function (error, success) {
                          
                            if (error) {
                                
                                console.log('Error during monthly fee record update : ' + error);
                                
                            } else {
                                
                                res.redirect(`/computer/${req.body._id}`)
        
                                console.log('monthly fee payment updated - miau miau')
                                

                            }
                    
                });
                
            }
            
