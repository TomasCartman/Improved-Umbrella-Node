
exports.up = function(knex) {
    return knex.schema.createTable('expenses', table => {
        table.increments('id').primary()
        table.string('username', 30).notNullable().references('username')
            .inTable('users')
        table.integer('expense_type')
        table.string('expense_name', 80).notNullable()
        table.float('expense_value').notNullable()
        table.string('expense_localization', 50)
        table.date('expense_date')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('expenses')
};
