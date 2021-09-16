const mongoose = require('mongoose');
const express = require('express');
const user = require('./controllers/userControllers')
const game = require('./controllers/gameControllers')
const e_bank = require('./controllers/e_bankController')

var app = express();

var port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',function(req,res){

    res.send('Welcom')

});

mongoose.connect('mongodb+srv://dbAG20:dbAG20@cluster0.2ulen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => { console.log(connected); },
  err => { console.log(err); });

mongoose.connection.once('open',function(){
    console.log('Connected successfully');
});


app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}`);
    console.log(`Backend: http://localhost:${port}/api/`);
    
});

