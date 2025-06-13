const db = require('../config/db');

const getAllWorkout = async() => {
	const result = await db.query('select * from workout');
	return result.rows;
};

const createWorkout = async(name) =>{
	const result = await db.query(
	'insert into workout(name) values ($1) returning *',
	[name]
	);
	return result.rows[0];
}

module.exports = {
	getAllWorkout,
	createWorkout
}