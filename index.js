const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')

//connect database
mongoose.connect('mongodb://localhost/jojo_Database', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('db connected'))
    .catch((err) => console.log(err))


const app = express();

//view engine
app.set('view engine', 'ejs');
// public express static
app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded())


//get link register page
app.get('/auth/register', (req, res) => {
    res.render('register')
})
//get store user link
app.post('/users/register', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

//home page
app.get('/', (req, res) => {
    res.send('Hello World')
});

app.get('/posts/new', (req, res) => {
    res.render('signin')
})

app.post('/posts/store', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})
//listen on specific post
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});