    const express = require('express');
    const router = express.Router();
    const Player = require('../models/player');
    const League = require('../models/league');

    // get and list players from database
    router.get('/players', function(req, res, next){
        Player.find({}).then(function(players){
            res.send(players);
        })
    });

    // add a new player to database
    router.post('/players', function(req, res, next){
        Player.create(req.body).then(function(player){
            res.send(player);
        }).catch(next);
    });

    // update a player in database
    router.put('/players/:id', function(req, res, next){
         Player.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(player){
            Player.findOne({_id: req.params.id}).then(function(player){
                res.send(player);
            }); 
         });
    });

    // delete a player from database
    router.delete('/players/:id', function(req, res, next){
        Player.findByIdAndRemove({_id: req.params.id}).then(function(player){
            res.send(player);
        })
    });

    router.get('/leagues', function(req, res, next){
        League.find({}).then(function(leagues){
            res.send(leagues);
        })
    });

    module.exports = router;

