const Student = require('../models/Student')

module.exports = async (req, res) => {

        insertAssignmentRecord(req, res);
 
    
}


function insertAssignmentRecord(req, res) {
    
    
                             //count of correct and incorrect answered
                            var correctCount = 0;
                            var incorrect = 0;
                            var questionNumber = [];
    
if(req.body.chapterName == 'Chapter-1') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Tim Berner-Lee') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Hyperlink') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Shareware') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Internet Service Provider (ISP)') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Authentication') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-2') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Web clients') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'User Network') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'AltaVista') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Remote login') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Two') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-3') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Space') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Spam') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Simple Mail Transfer Protocol') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == '64KB') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Post Office Protocol version 3') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-4') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Java') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'E-commerce') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Four') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Firewall') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Whiteboard Application') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-5') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Auditing') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Cryptography') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Cyber crime') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'unauthorized attack') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Packet') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-6') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'No one') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Anatomy') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'four') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Newsgroup') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Broadband Connection') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
var assignmentTheoryArray = {subjectName: req.body.subjectName, chapterName: req.body.chapterName, mcq1: req.body.dcaMCQ1, 
    
    mcq2:req.body.dcaMCQ2, mcq3:req.body.dcaMCQ3, mcq4: req.body.dcaMCQ4, mcq5: req.body.dcaMCQ5,
        
        Scored: correctCount, totalMark: req.body.totalMark };
    
        Student.findOneAndUpdate({ _id: req.body._id }, 
               
               {$push: {assignmentTheory104 : assignmentTheoryArray }}, { new: true },
               
                      function (error, success) {
                          
                            if (success) {
                                
                                res.redirect(req.get('referer'));
                               
                                console.log('assignment updated - miau miau');
                                
                                
                            } else {
                                
                               console.log('Error during exam assignment record update : ' + error);
                               
                               res.redirect(req.get('referer'));
                                

                            }
                    
                });
                
            }
            
