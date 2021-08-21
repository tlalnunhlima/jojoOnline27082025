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
                          if(req.body.dcaMCQ1 == 'Charles Babbage') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'High IQ') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == '0 or 1') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Computer') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '5th Generation') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-2') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == '4') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '8') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == '3') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == '7') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '6') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-3') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Random Access Memory') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Arithmetic Logic Unit') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Location or cells') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'RAM') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'many') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-4') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Magnetic Tape') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Magnetic Disk') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Secondary') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Universal Serial Bus') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Hierarchical Storage System') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-5') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Keyboard') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Inkjet') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Optical Mark Reader') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Plotters') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Input/Output') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-6') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Microsoft Word') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Microsoft Windows') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Application Software') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'System Programmer') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Hardware') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-7') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == '2') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'All of the above') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Compiler') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Java') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'High Level Language') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-8') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Micro Computer') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Supercomputer') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Server computer') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Laptop Computer') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Mainframe Computer') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-9') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == '94') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '17 October 2000') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'All of the above') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == '4') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Internet') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-10') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Wireless Fidelity') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Virtual Private Network') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Electronically Erasable Programmable Read-Only Memory') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Portable Document Format') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Basic Input Output System') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
    }
    
    var assignmentTheoryArray = {subjectName: req.body.subjectName, chapterName: req.body.chapterName, mcq1: req.body.dcaMCQ1, 
    
    mcq2:req.body.dcaMCQ2, mcq3:req.body.dcaMCQ3, mcq4: req.body.dcaMCQ4, mcq5: req.body.dcaMCQ5, Scored: correctCount, totalMark: req.body.totalMark};
    
        Student.findOneAndUpdate({ _id: req.body._id }, 
               
               {$push: {assignmentTheory : assignmentTheoryArray }}, { new: true },
               
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
            
