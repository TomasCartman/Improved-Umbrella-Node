
exports.up = function(knex) {
    return knex.schema.createTable('expenses_type', table => {
        table.increments('id').primary()
        table.string('name', 30).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('expenses_type')
};
