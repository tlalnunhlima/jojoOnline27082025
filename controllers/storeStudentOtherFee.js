const Student = require('../models/Student')

module.exports = async (req, res) => {

        insertFeeRecord(req, res);
 
    
}


function insertFeeRecord(req, res) {
    
    var otherfeePaymentArray = {narrationInput: req.body.narrationInput, feeAmount:req.body.feeAmount, dateofpayment:req.body.dateofpayment, remarks:req.body.remarks, verifierId: req.session.userId};
    
        Student.findOneAndUpdate({ _id: req.body._id }, 
               
               {$push: {studentOtherFee: otherfeePaymentArray }}, { new: true },
               
                      function (error, success) {
                          
                            if (error) {
                                
                                console.log('Error during other fee record update : ' + error);
                                
                            } else {
                                
                                res.redirect(`/computer/${req.body._id}`)
        
                                console.log('other fee payment updated - miau miau')
                                

                            }
                    
                });
                
            }
            
