const express = require('express');
const router = express.Router();
var Game = require('../modules/game');

//create a general game
router.post('/games', function(req,res,next){
    let game = new Game(req.body);
    game.save(function(err){
        if(err){return next(err);}
        res.status(201).json(game);
    });
});

//return all games
router.get('/games',function(req, res, next){
    Game.find(function(err,games){
        if(err){return next(err);}
        res.status(200).json({'games':games});

    });
});
//delete all games
router.delete('/games',function(req,res,next){
    Game.find(function(err,game){
        if(err){return next(err);}
        game.remove();
        res.status(204).json(game);

    });

})

//return the game with the given id
router.get('/games/:id',function(req,res,next){
    let id = req.body.id;
    Game.findById(id, function(err, game){
        if(err){return next(err);}
        if(game == null){
            return res.status(404).json({'game':'not found'});
        }
        res.status(200).json(game);
    });
    
});

//update the game with the given id
router.put('/games/:id',function(req,res,next){
    let id = req.body.id;
    Game.findById(id, function(err,game){
        if(err){return next(err);}
        if(game == null){
            return res.status(404).json({'game':'not found'});
        }
        game.name = req.body.name;
        game.rounds = req.body.rounds;
        
        game.save();
        res.status(201).json(game);
    });

});


//Partially update the game with the given ID
router.patch('/games/:id',function(req,res,next){
    let id = req.params.id;
    Game.findById(id, function(err, games){
        if(err){return next(err);}
        if(games == null){
            return res.status(404).json({'games':'not found'});
        }
        games.name = (req.name || games.name);
        games.rounds = (req.body.rounds || games.rounds);
        games.save();
        res.status(201).json(games);
    });

    
    
});

//Delete the game with the given ID
router.delete('/games/:id',function(req,res,next){
    let id = req.params.id;
    Game.findByIdAndDelete(id,function(err, game){
        if(err){return next(err);}
        if(game == null){
            return res.status(404).json({'game':'not found'});
        }

        res.status(204).json(game);
    });

});



module.exports = router;