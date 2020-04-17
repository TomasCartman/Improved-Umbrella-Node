
exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.string('username', 30).notNullable().primary()    
        table.string('password', 60).notNullable()
        table.string('name', 100).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
