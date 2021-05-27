const express = require('express')
const ejs = require('ejs')


const app = express();
//view engine
app.set('view engine', 'ejs');
// public express static
app.use(express.static(__dirname + '/public'));


//home page
app.get('/', (req, res) => {
    res.render('signin')
});

app.get('/users/register', (req, res) => {
    res.render('register')
});


//listen on specific post
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});