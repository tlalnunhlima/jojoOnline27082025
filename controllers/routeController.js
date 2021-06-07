const Student = require('../models/Student')

const staff = require('../models/staff')

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
router.get('/', async (req, res) => {
    
    const students = await Student.find({})
    
    console.log(req.session)
    
        res.render('stdList', {
            
            viewTitle: 'Student List',
            
            username: req.session.username,
            
            students
        })
});

//new student register form
router.get('/register', (req, res) => {
    
    var regn = ""
    var name = ""
    var fname = ""
    var address = ""
    var phone = ""
    var password = ""
    
    const data = req.flash('data')[0];
    
    if(typeof data != 'undefined') {
        regn = data.regn
        name = data.name
        fname = data.fname
        address = data.address
        phone = data.phone
        password = data.password
    }
    
    if(req.session.userId){
        
          return res.render('register', {

            viewTitle: 'Register new student here',
            
            errors: req.flash('validationErrors'),
            
            regn : regn,
            name : name,
            fname : fname,
            address : address,
            phone : phone,
            password : password
            
        })
    } 
    
    res.redirect('/login')
});

//save new student to database
router.post('/users/register', require('../controllers/storeStudent'))

router.post('/auth/login', require('../controllers/authLogin'))


//edit student details
router.get('/register/:id', (req, res) => {
    
    Student.findById(req.params.id, (err, doc) =>{
       
       if(!err) {
        
           res.render('editRegister', {
       
            viewTitle: 'Update student detail:',
            
                students: doc
                })
            }
        }) 
    })
    
router.get('/login', (req, res) => {
    
    if(req.session.userId) {
        
        console.log('You are still logged in!')
        
        return res.redirect('/')//if user logged in redirect to home page
     
    }

    res.render('login')
    
}) 
    
    
    
router.get('/stdList/delete/:id', (req, res) => {
    
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        
        if (!err) {
            
            res.redirect('/');
            
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

router.post('/auth/loginStaff', require('../controllers/authLoginStaff'))

// staff section end ============================


router.use((req, res) => res.render('notFoundPage'))

          

module.exports = router;