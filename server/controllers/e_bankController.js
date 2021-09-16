const express = require('express');
const E_bank = require('../modules/e_bank');
const router = express.Router();

//create a general e_bank
router.post('/e_banks', function(req,res,next){
    let e_bank = new E_bank(req.body);
    e_bank.save(function(err){
        if(err){return next(err);}
        res.status(201).json(e_bank);
    });
});
//returm all e_banks
router.get('/e_banks',function(req, res, next){
    E_bank.find(function(err,e_banks){
        if(err){return next(err);}
        res.status(200).json({'e_banks':e_banks});

    });
});
//delete all e_banks
router.delete('/e_banks',function(req,res,next){
    E_bank.find(function(err,e_bank){
        if(err){return next(err);}
        e_bank.remove();
        res.status(204).json(e_bank);

    });

})


//return the e_bank with the given id
router.get('/e_banks/:id',function(req,res,next){
    let id = req.body.id;
    E_bank.findById(id, function(err, e_bank){
        if(err){return next(err);}
        if(e_bank == null){
            return res.status(404).json({'e_bank':'not found'});
        }
        res.status(200).json(e_bank);
    });
    
});

//update the e_bank with the given id
router.put('/e_banks/:id',function(req,res,next){
    let id = req.body.id;
    E_bank.findById(id, function(err,e_bank){
        if(err){return next(err);}
        if(e_bank == null){
            return res.status(404).json({'e_bank':'not found'});
        }
        e_bank.total_money = req.body.total_money;
        e_bank.total_chips = req.body.total_chips;
        e_bank.money_in = req.body.money_in;
        e_bank.money_out = req.body.money_out;
        e_bank.chips_in = req.body.chips_in;
        e_bank.chips_out = req.body.chips_out;
        
        e_bank.save();
        res.status(201).json(e_bank);
    });

});
// Partially update the e_bank with the given ID
router.patch('/e_banks/:id',function(req,res,next){
    let id = req.params.id;
    E_bank.findById(id, function(err, e_banks){
        if(err){return next(err);}
        if(e_banks == null){
            return res.status(404).json({'e_banks':'not found'});
        }

        e_banks.total_money = (req.total_money || e_banks.total_money);
        e_banks.total_chips = (req.body.total_chips || e_banks.total_chips);
        e_banks.save();
        res.status(201).json(e_banks);
    });

    
    
});
//Delete the e_bank with the given ID
router.delete('/e_banks/:id',function(req,res,next){
    let id = req.params.id;
    E_bank.findByIdAndDelete(id,function(err, e_bank){
        if(err){return next(err);}
        if(e_bank == null){
            return res.status(404).json({'e_bank':'not found'});
        }

        res.status(204).json(e_bank);
    });

});


module.exports = router;

