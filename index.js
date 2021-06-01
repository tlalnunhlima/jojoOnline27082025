const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')

// //connect database
mongoose.connect('mongodb+srv://jojoOnline:jojoOnline@cluster0.24mkr.mongodb.net/jojo_database?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('db connected'))
     .catch((err) => console.log(err))


const app = express();

//view engine
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 3000))
// public express static
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded())

//control form link registration
const gotoNewUserForm = require('./controllers/newUserForm')
const storeUserController = require('./controllers/storeStudent')

//controll user login
const userLoginController = require('./controllers/newLogin')
const authLoginController = require('./controllers/authLogin')

//get link register page
app.get('/register', gotoNewUserForm)

app.get('/login', userLoginController)

//get store user link
app.post('/users/register', storeUserController)
app.post('/auth/login', authLoginController)

//home page
app.get('/', (req, res) => {
    res.send('Hello World jojo family')
});



//listen on specific post
 app.listen(app.get('port'), () => {
    console.log('App is listening on port:' + app.get('port'))
 });