const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

router.get('/',workoutController.getWorkout);
router.post('/',workoutController.addWorkout);

module.exports =router;