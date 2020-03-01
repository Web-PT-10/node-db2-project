const faker = require('faker');

exports.seed = async function(knex) {
	await knex('cars').truncate();
	await knex('cars').insert([
		{ id: 1, carMake: 'Nissan', carModel: 'Maxima', year: '1993', cost: '$7500', color: 'green' },
		{ id: 2, carMake: 'Toyota', carModel: 'Camary', year: '2014', cost: '$20,000', color: 'Grey' },
		{ id: 3, carMake: 'Toyota', carModel: 'Wish', year: '2012', cost: '$14,000', color: 'Creme' },
		{ id: 4, carMake: 'Lambo', carModel: 'TARI MUMMY', year: '2018', cost: '$750,000', color: 'Lavendar' }
	]);
};
