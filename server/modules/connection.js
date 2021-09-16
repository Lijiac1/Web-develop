const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dbAG20:dbAG20@cluster0.2ulen.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => { console.log(connected); },
  err => { console.log(err); });

mongoose.connection.once('open',function(){
    console.log('Connected successfully');
})

