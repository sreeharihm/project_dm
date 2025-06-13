const express = require('express')
const appRoutes = require('./routes')

require('dotenv').config();

const app = express()

app.use(express.json());

app.use('/api', appRoutes);

const PORT = process.env.PORT|| 3000;

app.listen(PORT, ()=> {
	console.log(`Server running at http://localhost:${PORT}`);
});