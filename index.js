require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const welcomeRouter = require('./routes/welcomeRouter');
const carRouter = require('./routes/carRoutes');

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(morgan());
server.use(express.json());

server.use('/', welcomeRouter);
server.use('/fruits', carRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong'
	});
});

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`);
});
