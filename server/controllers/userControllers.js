const express = require('express');
const User = require('../modules/user');
const router = express.Router();

// create a user with given information
router.post('/v1/users',function(req,res,next){
    let user = new User(req.body);
    User.save(function(err){
        if(err){return next(err);}
        res.status(201).json(user);
    });
    
});
// return all users
router.get('/v1/users',function(req,res,next){
    User.find(function(err,users){
        if(err){return next(err);}
        res.json({'users':users});
        res.status(200);
    });
});
// delete all users
router.delete('/v1/users',function(req,res,next){
    User.find(function(err,users){
        if(err){return next(err);}
        users.remove(function(err){
            if(err){return next(err);}
            res.status(204).json(users);
        });
        
    });
});
// return a user with a given id
router.get('/v1/users/:id',function(req,res,next){
    let id = req.params.id;
    User.findById(id, function(err, user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }
        res.status(200).json(user);
    });
    
});
// Update the user with the given ID
router.put('/v1/users/:id',function(req,res,next){
    let id = req.params.id;
    User.findById(id, function(err,user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }
        user.money = req.body.money;
        user.chips = req.body.chips;
        user.save(function(err){
            if(err){return next(err);}
            res.status(201).json(user)
        });
        ;

    });


});

// Partially update the user with the given ID
router.patch('/v1/users/:id',function(req,res,next){
    let id = req.params.id;
    User.findById(id, function(err, user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }

        user.money = (req.body.money || user.money);
        user.chips = (req.body.chips || user.money);
        user.save(function(err){
            if(err){return next(err);}
            res.status(201).json(user);
        });
        
    });

    
    
});

//Delete the user with the given ID
router.delete('/v1/users/:id',function(req,res,next){
    let id = req.params.id;
    User.findByIdAndDelete(id,function(err, user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }
        user.remove(function(err){
            if(err){return next(err);}
            res.status(204).json(user);
    
        });

        
    });

});




module.exports = router;




