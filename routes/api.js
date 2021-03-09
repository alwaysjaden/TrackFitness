const router = require('express').Router()
const workout = require('../models/Workout.js')


router.post('/api/workouts', function(req, res){
workout.create({}).then(function(dbWorkout){
    res.json(dbWorkout)
    })
})
router.get('/api/workouts', function(req,res){
    workout.find({}).then(function(dbWorkout){
        res.json(dbWorkout)
    })
})
router.put('/api/workouts/:id', function(req,res){
    console.log(req.body)
    workout.findByIdAndUpdate(req.params.id,{$push:{exercises:req.body}}).then(function(dbWorkout){
        res.json(dbWorkout)
    })
})

module.exports = router