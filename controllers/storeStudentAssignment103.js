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
                          if(req.body.dcaMCQ1 == '2007') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '10,500') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Option buttons') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Save as') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Ctrl + P') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-2') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Formatting') {
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
                          if(req.body.dcaMCQ3 == 'Alignment') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Header') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '4 paragraphs and 2 sentences of text') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-3') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'AutoCorrect') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'AutoCorrect') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-4') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'red') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'F7') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                         
                          //question 3
                          if(req.body.dcaMCQ3 == 'Ctrl + W') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                         
                          //question 4
                          if(req.body.dcaMCQ4 == 'All of the above') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                         
                          //question 5
                          if(req.body.dcaMCQ5 == 'Ctrl + K') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-5') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Replace All') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Find') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-6') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Portrait') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'format painter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'subscript and superscript') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                          //question 4
                          if(req.body.dcaMCQ4 == '2') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                          //question 5
                          if(req.body.dcaMCQ5 == 'Ruler') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-7') {
    
                         //question 1
                          if(req.body.dcaMCQ1 == 'All of these') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'WordArt') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'Clipart') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-8') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'rows and columns') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Tab') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'Blank') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-9') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Mail Merge') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'data source') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == '.accdb') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'paragraph') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-10') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == '16384, 1048576') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'AutoFill') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'left, right') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                          
    }
                          
if(req.body.chapterName == 'Chapter-11') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == '=') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'worksheets') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'tab') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Insert function') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                          
}
    
    if(req.body.chapterName == 'Chapter-12') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Cell referencing') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'mixed') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'E$4') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'relative') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                          
    }
if(req.body.chapterName == 'Chapter-13') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'F2') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Range') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'Print Preview') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                         
                           //question 4
                          if(req.body.dcaMCQ4 == 'All of the above') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '5,436.80') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
}
                          
if(req.body.chapterName == 'Chapter-14') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'MAX()') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Sorting') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'Conditional') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'AutoSum') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '=IF(LogicalTest, TrueResult, FalseResult)') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
}
                          
 if(req.body.chapterName == 'Chapter-15') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Data table') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '=power(2,3)') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'What-if analysis') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Sort and Filter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                          
 }
                          
if(req.body.chapterName == 'Chapter-16') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Data series') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Pie') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'True') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Both of the above') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                          
}
                          
if(req.body.chapterName == 'Chapter-17') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Presentation') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Ctrl + M') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == '.pptx') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                         
                           //question 4
                          if(req.body.dcaMCQ4 == 'arrange') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                          
}
                          
if(req.body.chapterName == 'Chapter-18') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Slide sorter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'F5') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'Esc') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'From beginning') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
}                
                          
if(req.body.chapterName == 'Chapter-19') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'New Slide') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Office button') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'Slide Shorter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'From New Slide button, choose duplicate selected slide') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Slide Orientation') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
}
                          
if(req.body.chapterName == 'Chapter-20') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Slide Master') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Rehearse Timings') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                           //question 3
                          if(req.body.dcaMCQ3 == 'Grouping') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == '=Now()') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Transition') {
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
               
               {$push: {assignmentTheory103 : assignmentTheoryArray }}, { new: true },
               
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
            
