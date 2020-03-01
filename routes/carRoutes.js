const express = require('express');
const db = require('../data/config');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const cars = await db('cars');
		res.json(cars);
	} catch (err) {
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const { id } = req.params;
		const car = await db('cars').where({ id }).first();

		res.json(car);
	} catch (err) {
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const { carMake, carModel, year, cost } = req.body;
		if (!req.body) {
			return res.status(400).json({
				message: 'Please enter proper inputs for the car. '
			});
		}

		const newCar = req.body;
		const [ id ] = await db('cars').insert(newCar);
		const newFruit = await db('cars').where({ id });

		res.status(201).json(newCar);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', validateCarId, async (req, res, next) => {
	const payload = {
		carMake: req.body.carMake,
		carModel: req.body.carModel,
		year: req.body.year,
		cost: req.body.cost
	};

	try {
		await db('cars').where('id', req.params.id).update(payload);
		const car = await db('cars').where('id', req.params.id).first();
		res.status(201).json(car);
	} catch (err) {
		next(err);
	}
});

router.delete('/:id', validateCarId, async (req, res, next) => {
	const id = await db('cars').where('id', req.params.id).del();
	if (id > 0) {
		res.status(200).json({ message: 'Car has been removed from the list' });
	}
	else {
		next();
	}
});

//custom middleware for data validation
async function validateCarId(req, res, next) {
	const Car = await db('cars').where('id', req.params.id);
	console.log(Car);
	if (!Car[0]) {
		res.status(404).json({ message: 'Invalid project Id' });
	}
	else {
		next();
	}
}

async function validateCar(req, res, next) {
	const { carMake, carModel, year, cost } = req.body;
	if (!req.body) {
		res.status(400).json({ message: 'PUT SOMETHING SHIT HEAD' });
	}
	else {
		next();
	}
}

module.exports = router;
