const Workout = require('../models/workoutModel');

const getWorkout = async(req,res) => {
	try{
		const workout = await Workout.getAllWorkout();
		res.json(workout);
	}catch(err){
		res.status(500).json({error: err.message})
	}
};

const addWorkout = async(req,res) => {
	try{
		const workout = await Workout.createWorkout();
		res.status(201).json(workout);
	}catch(err){
		res.status(500).json({error: err.message})
	}
};

module.exports = {
	getWorkout,
	addWorkout
}