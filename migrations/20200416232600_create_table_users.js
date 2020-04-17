
exports.up = function(knex) {
    return knex.schema.alterTable('users', table => {
        table.string('name', 100).notNullable().alter()
    })
};

exports.down = function(knex) {
    return knex.schema.createTable('users', table => {
        table.string('username', 30).notNullable().primary()    
        table.string('password', 60).notNullable()
        table.string('name', 100).notNullable()
    })
};
