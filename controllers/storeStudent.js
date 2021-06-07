const testScore = require('../models/studentScore.model')


module.exports = async (req, res) => {
  
   if (req.body._id == '') {
     
        insertRecord(req, res);
   }
        else {
     
        updateRecord(req, res);
}
}

function insertRecord(req, res) {
   
   const scoreDetail = new testScore({ 
      
      nameOfSubject: req.body.nameOfSubject,
      
      chapterNo: req.body.chapterNo,
      
      assignmentNo1: req.body.assignmentNo1,
      
      assignmentNo2: req.body.assignmentNo2,
      
      assignmentNo3: req.body.assignmentNo3,
      
      assignmentNo4: req.body.assignmentNo4,
      
      assignmentNo5: req.body.assignmentNo5,
      
      markObtained: req.body.markObtained,
      
      totalMark: req.body.totalMark
     
   })

   scoreDetail.save((err, doc) => {
       
        if (err) {
            
            const validationErrors = Object.keys(err.errors).map(key => err.errors[key].message)
            
            req.flash('validationErrors', validationErrors)
            
            req.flash('data', req.body)
            
            return res.redirect('/student/testPage')
        }
        
        res.redirect('/')
   })
}


function updateRecord(req, res) {
   
   testScore.findOneAndUpdate({ _id: req.body._id}, req.body, { new: true }, (err, doc) => {
       
        if (!err) { res.redirect('/')
        
         console.log('miau miau score updated')
           
        }
       
        else {
      
                console.log('Error during score record update : ' + err);
      
        }
    });
}