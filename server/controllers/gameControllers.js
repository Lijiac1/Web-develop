const express = require('express')
const router = express.Router();
var game = require('../modules/game')




router.patch('/games/:name',function(req,res){
    let game_name = req.body.name;
    game.findOne({names : game_name}, function(err, game_selected){
        if(err){return next(err)}
        game_selected.rounds = game_selected.rounds + req.body.rounds;
    })

})// add the rouds to a specific games

module.exports = router