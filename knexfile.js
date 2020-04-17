require('dotenv');

// CHANGE TO USE HEROKU DATABASE WITH PROCCESS.ENV
module.exports = {
    client: 'postgresql',
    connection: {
      database: 'improved_umbrella',
      user:     'postgres',
      password: 'root'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
