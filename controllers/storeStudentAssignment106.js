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
                          if(req.body.dcaMCQ1 == 'Ruler') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '1985') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Revert') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Ctrl + Shift + \\') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Bullet and Numbering') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-2') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Save as') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Aldus Manucius') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Dimensions') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Document Setup') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Bleed') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                  
    
    }
    
    if(req.body.chapterName == 'Chapter-3') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Pointer tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Object') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Rounded Corners') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Autoflow') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '100') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    }
    
    if(req.body.chapterName == 'Chapter-4') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Top') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Text block') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Layout') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Application software') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Document') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-5') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Place') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Cropping') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Morphing') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Element') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Text wrap') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-6') {
    
                            //question 1
                          if(req.body.dcaMCQ1 == 'Shift + tab') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Control palette') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Sorting pages') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Grouping') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Control palette') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-7') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Not editable') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Character specification') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'fully justified') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Gutter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Keyline') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-8') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Master Page') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '1 to 999') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Kerning') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Ctrl+Shift+P') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Master page') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-9') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Apply button') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Leading') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'One point line') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Alt+G') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '5') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-10') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Story Editor') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Story Editor') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Spelling') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Utilities') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Layout Editor') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-11') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Desktop publishing') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Define style') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Automatically') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-12') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Table of Content') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'TINT') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Primary') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-13') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Ctrl+Alt+]') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Frame option') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Inset') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                  
                          
    }
    
    if(req.body.chapterName == 'Chapter-14') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Layers palette') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Layers') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Cutting') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                  
                          
    }
    
    var assignmentTheoryArray = {subjectName: req.body.subjectName, chapterName: req.body.chapterName, mcq1: req.body.dcaMCQ1, 
    
    mcq2:req.body.dcaMCQ2, mcq3:req.body.dcaMCQ3, mcq4: req.body.dcaMCQ4, mcq5: req.body.dcaMCQ5,
        
        Scored: correctCount, totalMark: req.body.totalMark };
    
        Student.findOneAndUpdate({ _id: req.body._id }, 
               
               {$push: {assignmentTheory106 : assignmentTheoryArray }}, { new: true },
               
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
            
