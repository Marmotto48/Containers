const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const exercise_controllers = require('./controllers/exercise.controllers');

const uri = process.env.ATLAS_URI;
const docker_connection = "mongodb://admin:password@mongodb"
const docker_connection_2 = "mongodb://AzureDiamond:hunter2@mongodb"
const docker_connection_3 = "mongodb://admin:password@mongo:27017/"
const CONNECTION_URL_docker = "mongodb://admin:password@mongodb"

const options = {
	useNewUrlParser: true,
	// useCreateIndex: true,
	useUnifiedTopology: true,
};

mongoose.connect(docker_connection_3, options).catch((error) => console.log(error));

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Database connection established successfully');
});
mongoose.connection.on('error', (err) => {
	console.error('mongoose connection error', err);
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.get('/', exercise_controllers.list_exercises);
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
