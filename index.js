const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const path = require('path')


const app = express();
//view engine
app.set('view engine', 'ejs');

// public express static
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//connect database
mongoose.connect('mongodb://localhost/jojo_Database', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('db connected'))
    .catch((err) => console.log(err))


//home page
app.get('/', (req, res) => {
    res.render('signin')
});

//register page
const newUserController = require('./controllers/newUserForm')
//store user page
const storeUserController = require('./controllers/storeUser')

//get link register page
app.get('/auth/register', newUserController)
//get store user link
app.post('/users/register', storeUserController)

//listen on specific post
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});