const Student = require('../models/Student')

const staff = require('../models/staff')

const dcaQuestion = require('../QuestionJs/dca2019101Question')

const express = require('express')

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
            
        })
        
        console.log(req.session)
        
})




//student list for admin only view
router.get('/stdList', async (req, res) => {
    
    const students = await Student.find({})
    
    
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
    
    res.redirect('/')
});

//new student register form
router.get('/register', async (req, res) => {
    
    const students = await Student.find({})
    
    if(req.session.adminIdentity){
        
          return res.render('register', {

            viewTitle: 'Register new student here',
            
            errors: req.flash('validationErrors'),
            
            students: req.body
            
        })
    } 
    
    res.redirect('/auth/loginStaff')
});

//save new student to database
router.post('/users/register', require('../controllers/storeStudent'))

router.post('/auth/login', require('../controllers/authLoginStudent'))


//edit student details
router.get('/editStudent/:id', async (req, res) => {
    
    if(req.session.adminIdentity) {
    
   await Student.findById(req.params.id, (err, doc) =>{
       
       if(!err) {
        
           return res.render('register', {
       
            viewTitle: 'Update student detail:',
            
                students: doc
                
                })
            }
        })
        
    }
    
    else {
        
        res.redirect('/')
    }
    
})
    

    
router.get('/std/login', (req, res) => {
    
    if(req.session.userId) {
        
        console.log('You are still logged in!')
        
        return res.redirect('/stdDashboard')//if user logged in redirect to home page
     
    }

    res.render('studentLogin')
    
}) 


//student dashboard
router.get('/all/stdDashboard', (req, res) => {
    
    console.log(req.session.username)
    
    if(req.session.studentIdentity) {
        
       return res.render('stdDashboard', {
            
            username: req.session.username,
            
            link1: req.session.myDashboard1,
            
            link2: req.session.myDashboard2,
            
            link3: req.session.myDashboard3,
            
            link4: req.session.myDashboard4,
            
            href1: req.session.hrefLink1,
            
            href2: req.session.hrefLink2,
            
            href3: req.session.hrefLink3
            
        })
        
    }
        
        res.redirect('/')
    
}) 
    
    
    
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
// staff section ================================

router.get('/auth/loginStaff', (req, res) => {
    
    res.render('loginStaff')
    
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


//save new student to database
router.post('/staff/register', require('../controllers/storeStaff'))

router.post('/authUser/loginStaff', require('../controllers/authLoginStaff'))

// staff section end ============================


//assignment question start ============================

router.get('/student/test', (req, res) => {
    
    res.render('testQuestion', {
        
        questions : dcaQuestion
    })
    
})

//assignment question end ============================








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
           
            students: doc
                
            
                })
                
                return;
            }
            
        })
        
        return;
        
    }

        res.redirect('/stdList')
    
})



//go to form to update student info
router.get('/computer/:id/updateInfo', async (req, res) => {
    
    if(req.session.adminIdentity) {
    
    await Student.findById(req.params.id, (err, doc) =>{
       
       if(!err) {
        
           return res.render('addStdInfo', {
               
            viewTitle: 'Update Student Info',
       
            students: doc
                
                })
            }
            
        })
        
    }

        res.redirect('/computer/:id')
    
})



router.use((req, res) => res.render('notFoundPage'))

          
module.exports = router;