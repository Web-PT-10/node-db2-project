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

module.exports = router;
