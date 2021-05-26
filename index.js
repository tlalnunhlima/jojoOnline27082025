const express = require('express')

const ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs');

// public
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('signin')
});


app.listen(5000, () => {
    console.log('App is listening on port 50000')
});