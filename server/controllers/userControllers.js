const express = require('express');
const User = require('../modules/user');
const router = express.Router();

// create a user with given information
router.post('/v1/users',function(req,res,next){
    let user = null;
    user = new User(req.body);
    try {
        user.save(function(err){
        if(err){return next(err);}
        res.status(201).json(user);
        });
    } catch (error) {
        return next(error)
    }
    
    
});
// return all users
router.get('/v1/users',function(req,res,next){
    const limit = +req.query.limit
    User.find({}).limit(limit).exec(function(err,users){
        if(err){return next(err);}
        res.json({'users':users});
        res.status(200);
    });
});
router.post('/v1/users/login',function(req,res,next){
    User.findOne({username: req.body.username, password: req.body.password},function(err,user){
        if(err){return next(err);}
        if(!user){res.status(404)}
        res.json(user);
        res.status(200);
    })
})

router.get('/v1/users/username/:username', function(req,res,next){
    let userName = req.params.username;
    User.findOne({username: userName},function(err,user){
        if(err){return next(err);}
        res.json(user);
        res.status(200);

    });
});

// delete all users
router.delete('/v1/users',function(req,res,next){
    User.remove({},function(err,user){
        if(err){return next(err);}
        res.status(204).json(user);
    })
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
        user.e_bank_id = (req.body.e_bank_id || user.e_bank_id);
        user.save(function(err){
            if(err){return next(err);}
            res.status(201).json(user)
        });
        ;

    });
});
router.put('/v1/users/topup/:id',function(req,res,next){
    let id = req.params.id;
    User.findById(id, function(err,user){
        if(err){return next(err);}
        if(user == null){
            return res.status(404).json({'user':'not registered'});
        }
        user.money = Number(req.body.money) + 1000;
        user.chips = req.body.chips;
        user.e_bank_id = (req.body.e_bank_id || user.e_bank_id);
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

        user.money = (req.body.money);
        user.chips = (req.body.chips);
        user.e_bank_id = (req.body.e_bank_id || user.e_bank_id);

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
        
        res.status(204).json(user);

        
    });

});




module.exports = router;




