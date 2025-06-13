const express = require('express');
const router =  express.Router();

const workoutRoutes = require('./routes/workoutRoutes');

router.use('/workout',workoutRoutes);

module.exports = router;