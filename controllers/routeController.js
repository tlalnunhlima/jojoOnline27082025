const Student = require('../models/Student')

const express = require('express')

const router = express.Router();

const expressSession = require('express-session')

//global variable
global.loggedIn = null;


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
            
            students
        })
});
//new student register form
router.get('/register', (req, res) => {
    
    if(req.session.userId){
        
          return res.render('register', {

            viewTitle: 'Register new student here',
        })
    } 
    
    res.redirect('/login')
});

//save new student to database
router.post('/users/register', require('../controllers/storeStudent'))


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
        
        else { console.log('Error in employee delete :' + err); }
        
    });
});


router.get('/logout', (req, res) => {
    
    req.session.destroy(() => {
        
        res.redirect('/')
        
    })
    
})

          

module.exports = router;