const mongoose = require('mongoose')
// //connect database
mongoose.connect('mongodb+srv://jojoOnline:jojoOnline@cluster0.24mkr.mongodb.net/jojo_database?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => console.log('db connected'))
     .catch((err) => console.log(err))