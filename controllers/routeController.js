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

//computer student assignment
router.post('/computerStudents/theoryAssignment', require('../controllers/storeStudentAssignment'));





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
    
    console.log(req.session);
    
        res.render('staffList', {
            
            viewTitle: 'Staff List',
            
            staffs
        });
});





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
    
    
  const thisStudent = await Student.findOne({_id: req.session.userId});
  
  console.log('========= ' + thisStudent);
    
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
            
            thisStudent
     
        });
        
    }
        
        res.redirect('/');
    
});



//student check score

router.get('/assignment/checkScore/:id', async (req, res) => {
    
  const thisAssignment = await Student.findOne({_id: req.params.id});
  
    if(req.session.studentIdentity) {
        
        return res.render('assignmentCheckScore', {
            
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
            
            thisAssignment
     
        });
        
    }
        
        res.redirect('/');
    
});




//student view profile and fee ====

router.get('/all/computer/:id', async (req, res) => {
    
    if(req.session.studentIdentity) {
    
    await Student.findById(req.params.id, (err, doc) =>{
       
       if(!err) {
        
            return res.render('studentPage', {
       
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
                
                });
 
            }
            
        })
        
        .populate('studentFee.verifierId')
        
        .populate('studentExamFee.verifierId')
        
        .populate('studentOtherFee.verifierId');
        
        return;
        
    }

        res.redirect('/all/stdDashboard');
    
});



//theory intro page

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
            
        });
        
    }
        
        res.redirect('/');
    
});



//dca-101 intro page

router.get('/all/dca101welcomepage', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca101welcomepage', {
            
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
        
        res.redirect('/');
    
}); 



//dca-102 intro page

router.get('/all/dca102welcomepage', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca102welcomepage', {
            
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
        
        res.redirect('/');
    
}); 



//dca-103 intro page

router.get('/all/dca103welcomepage', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca103welcomepage', {
            
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
        
        res.redirect('/');
    
}); 


//dca-104 intro page

router.get('/all/dca104welcomepage', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca104welcomepage', {
            
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
        
        res.redirect('/');
    
}); 


//dca-105 intro page

router.get('/all/dca105welcomepage', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca105welcomepage', {
            
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
        
        res.redirect('/');
    
}); 




//dca-106 intro page

router.get('/all/dca106welcomepage', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca106welcomepage', {
            
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
        
        res.redirect('/');
    
}); 





//dca101 chapter  1

router.get('/all/dca1semOnlineLessonChapter1', (req, res) => {
    


    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter1', {
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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


//dca101 chapter  6

router.get('/all/dca1semOnlineLessonChapter6', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter6', {
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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



//dca101 chapter  7

router.get('/all/dca1semOnlineLessonChapter7', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter7', {
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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

//dca101 chapter  8

router.get('/all/dca1semOnlineLessonChapter8', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter8', {
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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


//dca101 chapter  9

router.get('/all/dca1semOnlineLessonChapter9', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter9', {
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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


//dca101 chapter  10

router.get('/all/dca1semOnlineLessonChapter10', (req, res) => {
    
    if(req.session.studentIdentity) {
        
       return res.render('dca1semOnlineLessonChapter10', {
           
           chapterTitle: 'Fundamental of Computer (DCA-101:Theory)',
            
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


// ================================


//dca102 chapter  1

router.get('/all/dca102onlineclasschapter1', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter1', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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


//dca102 chapter  2

router.get('/all/dca102onlineclasschapter2', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter2', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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



//dca102 chapter  3

router.get('/all/dca102onlineclasschapter3', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter3', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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



//dca102 chapter  4

router.get('/all/dca102onlineclasschapter4', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter4', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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



//dca102 chapter  5

router.get('/all/dca102onlineclasschapter5', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter5', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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


//dca102 chapter  6

router.get('/all/dca102onlineclasschapter6', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter6', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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



//dca102 chapter  7

router.get('/all/dca102onlineclasschapter7', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter7', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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


//dca102 chapter  8

router.get('/all/dca102onlineclasschapter8', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter8', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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




//dca102 chapter  9

router.get('/all/dca102onlineclasschapter9', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter9', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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



//dca102 chapter  10

router.get('/all/dca102onlineclasschapter10', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca102onlineclasschapter10', {
           
           chapterTitle: 'Operating System (DCA-102:Theory)',
            
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



/*=====================dca103 theory started========================*/



//dca103 chapter  1

router.get('/all/dca103onlineclasschapter1', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter1', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  2

router.get('/all/dca103onlineclasschapter2', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter2', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  3

router.get('/all/dca103onlineclasschapter3', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter3', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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



//dca103 chapter  4

router.get('/all/dca103onlineclasschapter4', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter4', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  5

router.get('/all/dca103onlineclasschapter5', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter5', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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



//dca103 chapter  6

router.get('/all/dca103onlineclasschapter6', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter6', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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



//dca103 chapter  7

router.get('/all/dca103onlineclasschapter7', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter7', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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



//dca103 chapter  8

router.get('/all/dca103onlineclasschapter8', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter8', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  9

router.get('/all/dca103onlineclasschapter9', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter9', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  10

router.get('/all/dca103onlineclasschapter10', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter10', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  11

router.get('/all/dca103onlineclasschapter11', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter11', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  12

router.get('/all/dca103onlineclasschapter12', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter12', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  13

router.get('/all/dca103onlineclasschapter13', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter13', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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

//dca103 chapter  14

router.get('/all/dca103onlineclasschapter14', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter14', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  15

router.get('/all/dca103onlineclasschapter15', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter15', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  16

router.get('/all/dca103onlineclasschapter16', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter16', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  17

router.get('/all/dca103onlineclasschapter17', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter17', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  18

router.get('/all/dca103onlineclasschapter18', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter18', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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


//dca103 chapter  19

router.get('/all/dca103onlineclasschapter19', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter19', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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

//dca103 chapter  20

router.get('/all/dca103onlineclasschapter20', (req, res) => {

    if(req.session.studentIdentity) {
        
       return res.render('dca103onlineclasschapter20', {
           
           chapterTitle: 'Office Automation Software (DCA-103:Theory)',
            
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

/*=====================dca103 theory end========================*/






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

router.get('/auth/logout', (req, res) => {
    
    req.session.destroy(() => {
        
        res.redirect('/')
        
    })
    
})



//===================================

//delete assignment record
 
router.get('/assignment/delete/:id/:theoryId', async (req, res) => {
    

await Student.updateOne({_id: req.params.id}, { $pull: { assignmentTheory : { _id : req.params.theoryId } } }, { multi: true }, (err, doc) => {
        
        if (!err) {
            
            console.log('One assignment data deleted successfully');
            
            res.redirect('/all/stdDashboard');
            
        }
        
        else { console.log('Error in assignment delete :' + err); }
        
    });
    
});


//=================================================




router.use((req, res) => res.render('notFoundPage'))

module.exports = router;