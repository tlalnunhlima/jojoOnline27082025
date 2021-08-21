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
                          if(req.body.dcaMCQ1 == 'Lasso') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Brush tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Blur Tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Custom Shape tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Hand tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-2') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == '72 to 96 ppi') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Three dimensional') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'PNG') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Cloning image') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'vector and raster') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                  
    
    }
    
    if(req.body.chapterName == 'Chapter-3') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Duplicating') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Clipping group') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Eye icon') {
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
                          if(req.body.dcaMCQ5 == 'Layer > New > Layer...') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    }
    
    if(req.body.chapterName == 'Chapter-4') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Alpha') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Right') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Black and white') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Layer menu > Remove layer mask > apply') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == '8-bit') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-5') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Gradient') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'unmask') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Layers') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Image > adjustment') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-6') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'linked') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Window > Styles') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Add a layer style') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-7') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'path selection tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Curve segment') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'pen tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'make work path') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'The Pen Tool') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-8') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Image > Adjustments > Levels...') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Color balance') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Color Levels') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-9') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == '-100 to +100') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '10% to 300%') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Hue') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Sponge') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Brightness') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
    
    }
    
    if(req.body.chapterName == 'Chapter-10') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == '24') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'Identical pixels dimensions') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Grayscale') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Channel palette menu') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'History palette') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-11') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Masking') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'quick mask mode') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == '8 bit') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-12') {
    
                           //question 1
                          if(req.body.dcaMCQ1 == 'Render') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == '50-300mm zoom, 55mm prime, 105mm prime') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == 'Liquify filter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Tile filter') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'a 3D effect') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q5');
                          }
                          
    }
    
    if(req.body.chapterName == 'Chapter-13') {
    
                          //question 1
                          if(req.body.dcaMCQ1 == 'Photoshop') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q1');
                          }
                          //question 2
                          if(req.body.dcaMCQ2 == 'ImageReady') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q2');
                          }
                          //question 3
                          if(req.body.dcaMCQ3 == '1 to 999') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q3');
                          }
                           //question 4
                          if(req.body.dcaMCQ4 == 'Rasterizing') {
                            correctCount++;
                          } else {
                            incorrect++;
                            questionNumber.push('Q4');
                          }
                           //question 5
                          if(req.body.dcaMCQ5 == 'Eyedropper') {
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
               
               {$push: {assignmentTheory105 : assignmentTheoryArray }}, { new: true },
               
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
            
