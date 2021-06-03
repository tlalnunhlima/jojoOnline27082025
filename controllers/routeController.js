const express = require('express')

const router = express.Router();

const Student = require('../models/Student')




//home page
router.get('/', async (req, res) => {
    
    const students = await Student.find({})
    
        res.render('stdList', {
            
            viewTitle: 'Student List',
            
            students
        })
});
//new student register form
router.get('/register', (req, res) => {
    
          res.render('register', {
              
            viewTitle: 'Register new student here',
        })
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
    
router.get('/stdList/delete/:id', (req, res) => {
    
    Student.findByIdAndRemove(req.params.id, (err, doc) => {
        
        if (!err) {
            
            res.redirect('/');
            
        }
        
        else { console.log('Error in employee delete :' + err); }
        
    });
});
    

          

module.exports = router;