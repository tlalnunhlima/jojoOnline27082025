const Student = require('../models/Student')



//student save to database authorization

module.exports = (req, res, next) => {
    
    const { username, fname, dob } = req.body;
    
    
    //start of student name compare ===============
    
    Student.findOne({username: username}, (error, studentName) => {
        
        if(studentName) {
            
            console.log('student found');
            
            
            //start of father name compare ===============
            
            Student.findOne({fname: fname}, (error, studentFatherName) => {
                
                if(studentFatherName) {
                    
                    console.log('student father name matched');
                    
                                // start of dob compare ===============
                                
                                Student.findOne({dob: dob}, (error, studentDob) => {
                            
                                    if(studentDob) {
                                
                                        console.log('student dob matched');
                                        
                                            return res.render('register', {
                                                
                                            viewTitle: 'Register Student',
                            
                                            errors: 'Name, Father Name, Dob already exist!',
                                            
                                            students: req.body
                                    
                                            });
                                
                                        } else {
                                
                                            next();
                                
                                        }
                                
                                    }); // end of dob compare ===============
            
                            } else {
            
                                next();
                      
                            }
                
                    }); //end of father name compare ===============

                } else {
                    
                    next();
                        

                }
                
    }); //end of student name compare ===============
};