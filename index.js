const express = require('express')

const ejs = require('ejs')

const app = express();

app.set('view engine', 'ejs');

// public
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('signin')
});


app.listen(3000, () => {
    console.log('App is listening on port 3000')
<<<<<<< HEAD
});
=======
});
>>>>>>> a8e0c60d7d9f70e025577939aa8be7acb0cafe14
