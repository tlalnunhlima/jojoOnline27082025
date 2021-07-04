const Student = require('../models/Student')

const staff = require('../models/staff')

const dcaQuestion = require('../QuestionJs/dca2019101Question')

const express = require('express')

const moment = require('moment')

const router = express.Router();

const expressSession = require('express-session')

const flash = require('connect-flash')

//global variable
global.loggedIn = null;

//flash errors message
router.use(flash())


router.use(expressSession({
    
    resave: false,
    
    saveUninitialized: true,
    
    secret: 'keyboard cat'
}))


router.use('*', (req, res, next) => {
    
   loggedIn = req.session.userId;
    
    next()
});





//ask authorisation to login
router.post('/auth/login', require('../controllers/authLoginStudent'))


//save new student to database
router.post('/users/register', require('../controllers/authSaveNewStudent'), require('../controllers/storeStudent'))

//update student fee payment
router.post('/users/feeRegister', require('../controllers/storeStudentFee'))

//update student exam fee 
router.post('/users/examFeeRegister', require('../controllers/storeStudentExamFee'))


//update student any other fee 
router.post('/users/otherFeeRegister', require('../controllers/storeStudentOtherFee'))


//save new student to database
router.post('/staff/register', require('../controllers/storeStaff'))

//auth login staff

router.post('/authUser/loginStaff', require('../controllers/authLoginStaff'))





//home page
router.get('/', (req, res) => {
    
            res.render('home', {
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3
            
        });
        
        console.log(req.session);
        
});




//student list for admin only view

router.get('/stdList', async (req, res) => {
    
    const students = await Student.find({}).sort({regn : -1}).populate('staffid');
    
    
   if(req.session.adminIdentity) {
    
          return res.render('stdList', {
            
            viewTitle: 'Student List',
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            students
        })
        
        }
    
    res.redirect('/');
});






//new student register form ======================================

router.get('/register', (req, res) => {
    
    if(req.session.adminIdentity){
        
          return res.render('register', {

            viewTitle: 'Register Student',
            
            errors: req.flash('validationErrors') &&  req.flash('errors'),
            
            students: req.body
            
        });
    } 
    
    res.redirect('/auth/loginStaff');
}); 

//end of new student register form ======================================







//edit student details

router.get('/editStudent/:id', async (req, res) => {
    
    if(req.session.adminIdentity) {
    
   await Student.findById(req.params.id, (err, doc) =>{
       
       if(!err) {
        
           return res.render('register', {
       
            viewTitle: 'Update student detail:',
            
            errors: req.flash('validationErrors') &&  req.flash('errors'),
            
            students: doc
                
                });
            }
        });
        
    }
    
    else {
        
        res.redirect('/')
    }
    
})
    



// staff section ================================

router.get('/auth/loginStaff', (req, res) => {
    
    res.render('loginStaff', {
        
        errors: req.flash('errors')
        
        
    });
    
});




//register staff

router.get('/auth/registerStaff', (req, res) => {
    
    res.render('registerStaff', {

            viewTitle: 'Register new staff here'
            
        })
});






router.get('/view/staffList', async (req, res) => {
    
    const staffs = await staff.find({})
    
    console.log(req.session)
    
        res.render('staffList', {
            
            viewTitle: 'Staff List',
            
            staffs
        })
})





//staff delete

router.get('/staffList/delete/:id', (req, res) => {
    
    staff.findByIdAndRemove(req.params.id, (err, doc) => {
        
        if (!err) {
            
            res.redirect('/view/staffList');
            
        }
        
        else { console.log('Error in staff delete :' + err); }
        
    });
    
});



//student login panel
    
router.get('/std/loginStudent', (req, res) => {
    
    res.render('studentLogin', {
        
        errors: req.flash('errors'),
        
        students: req.body
        
        });
     
});








//student dashboard

router.get('/all/stdDashboard', async (req, res) => {
    
 const students = await Student.find({});
    
    if(req.session.studentIdentity) {
        
       return res.render('stdDashboard', {
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId,
            
            students
            
        })
        
    }
        
        res.redirect('/')
    
}) 




//student view profile and fee ====

router.get('/all/computer/:id', async (req, res) => {
    
    if(req.session.studentIdentity) {
    
    await Student.findById(req.params.id, (err, doc) =>{
       
       if(!err) {
        
            res.render('studentPage', {
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId,
           
            students: doc
                
                })
                
                return;
            }
            
        })
        
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
    }

        res.redirect('/all/stdDashboard')
    
})









router.get('/all/dcatheorywelcomepage', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dcatheorywelcomepage', {
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId
            
        })
        
    }
        
        res.redirect('/')
    
}) 


//dca101 chapter  1

router.get('/all/dca1semOnlineLessonChapter1', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter1', {
           
           chapterTitle: 'DCA-101 Fundamental of Computer (Theory)',
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId
            
        });
        
    }
        
        res.redirect('/all/stdDashboard');
    
});


//dca101 chapter  2

router.get('/all/dca1semOnlineLessonChapter2', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter2', {
           
           chapterTitle: 'DCA-101 Fundamental of Computer (Theory)',
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId
            
        });
        
    }
        
        res.redirect('/all/stdDashboard');
    
});


//dca101 chapter  3

router.get('/all/dca1semOnlineLessonChapter3', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter3', {
           
           chapterTitle: 'DCA-101 Fundamental of Computer (Theory)',
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId
            
        });
        
    }
        
        res.redirect('/all/stdDashboard');
    
});



//dca101 chapter  4

router.get('/all/dca1semOnlineLessonChapter4', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter4', {
           
           chapterTitle: 'DCA-101 Fundamental of Computer (Theory)',
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId
            
        });
        
    }
        
        res.redirect('/all/stdDashboard');
    
});


//dca101 chapter  5

router.get('/all/dca1semOnlineLessonChapter5', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter5', {
           
           chapterTitle: 'DCA-101 Fundamental of Computer (Theory)',
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.studentIdentity,
            
            studentId: req.session.userId
            
        });
        
    }
        
        res.redirect('/all/stdDashboard');
    
});



    
    
router.get('/stdList/delete/:id', (req, res) => {
    
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        
        if (!err) {
            
            console.log('One recorded data deleted successfully')
            
            res.redirect('/stdList');
            
        }
        
        else { console.log('Error in student delete :' + err); }
        
    });
});


router.get('/auth/logout', (req, res) => {
    
    req.session.destroy(() => {
        
        res.redirect('/')
        
    })
    
})



//erere

router.get('/student/test', (req, res) => {
    
    res.render('testQuestion', {
        
        questions : dcaQuestion
    })
    
})

//assignment question end ============================








//view all group of fee

router.get('/viewFee',(req, res) => {
    

if(req.session.adminIdentity) {
    
    return res.render('viewFee', {
                
            viewTitle: 'All Fee Account',
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            moment: moment
                
                });
                
            } 
               

        res.redirect('/stdList');
    
});






//today fee review list for admin only view

router.get('/viewFee/todayFeeReview', async (req, res) => {
    
    
    //hei hi vawiin date entirnan 2021-06-26 a ni;  moment().format('YYYY-MM-DD')
            
if(req.session.adminIdentity) {
    
  await Student.find( { $or: [ {studentFee : { $elemMatch: {  dateofpayment : moment().format('YYYY-MM-DD')  } } }, 
  
  { studentExamFee : { $elemMatch: {  dateofpayment : moment().format('YYYY-MM-DD')  } } },
  
  { studentOtherFee : { $elemMatch: {  dateofpayment : moment().format('YYYY-MM-DD')  } } }
  
  ] },
  
  (err, doc) => {
      
      console.log(doc.length);
      
      if(!err) {
          
            res.render('todayFeeReview', {
                
            viewTitle: 'Who paid Fee today',
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
           
            students: doc,
            
            moment: moment
            
                
                });
                
                return;
                
                

            } else {
                
                res.redirect('/stdList');
                
            }
            
        })
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
            
    }
        
        
        res.redirect('/stdList');
    
});






//i want to see all fee received from the student irrespective of timestamp

router.get('/viewFee/viewAllFeeReceived', async (req, res) => {
    

     const startingDateWithoutTime = moment().format('2021-01-01'); //kumtir hriatna
            
     const currentDateWithoutTime = moment().format('YYYY-MM-DD'); //vawiin hriatna
            

if(req.session.adminIdentity) {
    
  await Student.find({studentFee : { $elemMatch: {  dateofpayment : { $gte: startingDateWithoutTime, $lte: currentDateWithoutTime } } } }, (err, doc) => {
      
      if(!err) {
          
            res.render('viewAllFeeReceived', {
                
            viewTitle: 'All account: ',
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
           
            students: doc,
            
            moment: moment
                
                });
                
                return;

            } else {
                
                
                res.redirect('/stdList');
                
            }
            
        })
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
    }

        res.redirect('/stdList');
    
});







//exam fee review list for admin only view

router.get('/viewFee/viewExamFeeReceived', async (req, res) => {
    
    
    const startingDateWithoutTime = moment().format('2021-01-01'); //kumtir hriatna
            
    const currentDateWithoutTime = moment().format('YYYY-MM-DD'); //vawiin hriatna
            

if(req.session.adminIdentity) {
    
  await Student.find({studentExamFee : { $elemMatch: {  dateofpayment : { $gte: startingDateWithoutTime, $lte: currentDateWithoutTime } } } }, (err, doc) => {
      
      if(!err) {
          
            res.render('viewExamFeeReceived', {
                
            viewTitle: 'Who paid Exam Fee this Session',
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
           
            students: doc,
            
            moment: moment
            
                
                });
                
                return;
                
                

            } else {
                
                res.redirect('/viewFee');
                
            }
            
        })
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
            
    }
        
        
        res.redirect('/viewFee');
    
});






//other fee review list for admin only view

router.get('/viewFee/viewOtherFeeReceived', async (req, res) => {
    
    
   const startingDateWithoutTime = moment().format('2021-01-01'); //kumtir hriatna
            
   const currentDateWithoutTime = moment().format('YYYY-MM-DD'); //vawiin hriatna
            

if(req.session.adminIdentity) {
    
  await Student.find({studentOtherFee : { $elemMatch: {  dateofpayment : { $gte: startingDateWithoutTime, $lte: currentDateWithoutTime } } } }, (err, doc) => {
      
      if(!err) {
          
            res.render('viewOtherFeeReceived', {
                
            viewTitle: 'Who paid any other fee this Session',
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
           
            students: doc,
            
            moment: moment
            
                
                });
                
                return;
                
                

            } else {
                
                res.redirect('/viewFee');
                
            }
            
        })
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
            
    }
        
        
        res.redirect('/viewFee');
    
});





//view fee by selecting date for admin only view

router.get('/viewFee/viewFeeByDate/:dateofpayment', async (req, res) => {
    

//req.params.dateofpayment hian a chunga url date hi a search chhuak thei dawn a ni.
            
if(req.session.adminIdentity) {
    
  await Student.find({$or: [{studentFee : { $elemMatch: {  dateofpayment : { $eq: req.params.dateofpayment }  } } }, 
  
  {studentExamFee : { $elemMatch: {  dateofpayment : { $eq: req.params.dateofpayment }  } } },
  
  {studentOtherFee : { $elemMatch: {  dateofpayment : { $eq: req.params.dateofpayment }  } } }
  
  ] },
  
  (err, doc) => {
      

      if(!err) {
          
            res.render('viewFeeByDate', {
                
            viewTitle: 'Your search date: ',
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
           
            students: doc,
            
            moment: moment,
            
            searchDate: req.params.dateofpayment
            
                
                });
                
                return;
                
                

            } else {
                
                res.redirect('/stdList');
                
            }
            
        })
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
            
    }
        
        
        res.redirect('/stdList');
    
});








//student page admin only view====

router.get('/computer/:id', async (req, res) => {
    
    if(req.session.adminIdentity) {
    
    await Student.findById(req.params.id, (err, doc) =>{
       
       if(!err) {
        
            res.render('studentPage', {
       
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3,
            
            loginIdName: req.session.adminIdentity,
           
            students: doc
                
                })
                
                return;
            }
            
        })
        
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
    }

        res.redirect('/stdList')
    
})




//monthly fee payment form

router.get('/computer/:id/feeRegister', async (req, res) => {
    
  if(req.session.adminIdentity) {
       
       await Student.findById(req.params.id, (err, doc) =>{
           
    if(!err) {
    
        res.render('feeRegister', {
                
            viewTitle: 'Monthly fee statement',
       
            students: doc
            
                    });

                }

            });
                
        return;
        
    }
            
        res.redirect('/computer/:id');
        
});

// =========================================






//exam fee payment form =========

router.get('/computer/:id/examFeeRegister', async (req, res) => {
    
  if(req.session.adminIdentity) {
       
       await Student.findById(req.params.id, (err, doc) =>{
           
    if(!err) {
    
        res.render('examFeeRegister', {
                
            viewTitle: 'Exam fee statement',
       
            students: doc
            
                    });

                }

            });
                
        return;
        
    }
            
        res.redirect('/computer/:id');
        
});
// =========================================






//other fee like backlog any other payment form =====================

router.get('/computer/:id/otherFeeRegister', async (req, res) => {
    
  if(req.session.adminIdentity) {
       
       await Student.findById(req.params.id, (err, doc) =>{
           
    if(!err) {
    
        res.render('otherFeeRegister', {
                
            viewTitle: 'Other fee statement',
       
            students: doc
            
                    });

                }

            });
                
        return;
        
    }
            
        res.redirect('/computer/:id');
        
});
// =========================================





router.use((req, res) => res.render('notFoundPage'))

module.exports = router;