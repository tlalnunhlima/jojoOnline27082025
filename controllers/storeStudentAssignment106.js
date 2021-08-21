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
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Ruler') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == '1985') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Revert') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Ctrl + Shift + \\') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Bullet and Numbering') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-2') {
    
                           //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Save as') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Aldus Manucius') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Dimensions') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Document Setup') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Bleed') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                  
    
    }
    
    if(req.body.chapterName == 'Chapter-3') {
    
                           //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Pointer tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Object') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Rounded Corners') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Autoflow') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == '100') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    }
    
    if(req.body.chapterName == 'Chapter-4') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Top') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Text block') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Layout') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Application software') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Document') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-5') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Place') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Cropping') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Morphing') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Element') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Text wrap') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-6') {
    
                            //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Shift + tab') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Control palette') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Sorting pages') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Grouping') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Control palette') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-7') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Not editable') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Character specification') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'fully justified') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Gutter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Keyline') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-8') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Master Page') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == '1 to 999') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Kerning') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Ctrl+Shift+P') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Master page') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-9') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Apply button') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Leading') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'One point line') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Alt+G') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == '5') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-10') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Story Editor') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Story Editor') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Spelling') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(thisStudent.assignmentTheory106[i].mcq4 == 'Utilities') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(thisStudent.assignmentTheory106[i].mcq5 == 'Layout Editor') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-11') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Desktop publishing') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Define style') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Automatically') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-12') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Table of Content') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'TINT') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Primary') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-13') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Ctrl+Alt+]') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Frame option') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Inset') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                  
                          
    }
    
    if(req.body.chapterName == 'Chapter-14') {
    
                          //question 1
                          if(thisStudent.assignmentTheory106[i].mcq1 == 'Layers palette') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(thisStudent.assignmentTheory106[i].mcq2 == 'Layers') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(thisStudent.assignmentTheory106[i].mcq3 == 'Cutting') {
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
            
