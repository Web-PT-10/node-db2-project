const faker = require('faker');

exports.seed = async function(knex) {
	await knex('cars').insert([
		{ id: 1, carMake: 'Nissan', carModel: 'Maxima', year: '1993', cost: '$7500', color: 'green' },
		{ id: 2, carMake: 'Nissan', carModel: 'Maxima', year: '1993', cost: '$7500', color: 'green' },
		{ id: 3, carMake: 'Nissan', carModel: 'Maxima', year: '1993', cost: '$7500', color: 'green' },
		{ id: 4, carMake: 'Nissan', carModel: 'Maxima', year: '1993', cost: '$7500', color: 'green' }
	]);
};
