const express = require('express');
const User = require('../modules/user');
const router = express.Router();

// create a user with given information
router.post('/users',function(req,res){
    let user = new User(req.body);
    client.save(function(err){
        if(err){return next(err);}
        res.status(201).json(user);
    });
    
});
// return all users
router.get('/users',function(req,res){
    User.find(function(err,users){
        if(err){return next(err);}
        res.json({'users':users});
        res.status(200);
    });
});
// delete all users
router.delete('/users',function(req,res){
    User.find(function(err,users){
        if(err){return next(err);}
        users.remove();
        res.status(204);
    });
});
// return a user with a given id
router.get('/users/:id',function(req,res){
    let id = req.body.id;
    User.findById(id, function(err, user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }
        res.status(200).json(user);
    });
    
});
// Update the user with the given ID
router.put('/users/:id',function(req,res){
    let id = req.body.id;
    User.findById(id, function(err,user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }
        user.money = req.body.money;
        user.chips = req.body.chips;
        user.save();
        res.status(201).json(user);

    });


});
// Partially update the camel with the given ID
router.patch('/users/:id',function(req,res){
    let id = req.params.id;
    User.findById(id, function(err, user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }

        user.money = (req.body.money || user.money);
        user.chips = (req.body.chips || user.money);
        user.save();
        res.status(201).json(user);
    });

    
    
});

//Delete the user with the given ID
router.delete('/users/:id',function(req,res){
    let id = req.params.id;
    User.findByIdAndDelete(id,function(err, user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }

        res.status(201).json(user);
    });

});




module.exports = router;




