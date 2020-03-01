exports.up = async function(knex) {
	await knex.schema.createTable('cars', (table) => {
		table.increments('id');
		table.text('carMake').notNull();
		table.text('carModel').notNull();
		table.float('year').notNull();
		table.float('cost').notNull();
		table.text('color');
	});
};

exports.down = async function(knex) {
	await knex.scheme.dropTableIfExists('cars');
};
