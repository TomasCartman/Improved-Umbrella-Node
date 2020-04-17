
exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id').primary()
        table.integer('expense_id').notNullable().references('id')
            .inTable('expenses')
        table.string('item_name', 50).notNullable()
        table.float('item_value').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('items')
};
