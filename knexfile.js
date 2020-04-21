/*
module.exports = {
    client: 'postgresql',
    connection: {
      host: 'ec2-52-71-85-210.compute-1.amazonaws.com',
      database: 'd68d6vds8i89bm',
      user:     'vqxjwyxkkdpffb',
      password: '758a9a8c9a03b91b5627a8c680f0351b371f419d96231812cfc2c9f2bdd211a5'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
*/

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
