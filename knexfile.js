module.exports = {
   development: {
      client: 'sqlite3',
      connection: {
         filename: './database/hackathon.db3'
      },
      migrations: {
         directory: './database/migrations'
      },
      seeds: {
         directory: './database/seeds'
      }
   },

   staging: {
      client: 'pg',
      connection: {
         database: 'my_db',
         user: 'username',
         password: 'password'
      },
      pool: {
         min: 2,
         max: 10
      },
      migrations: {
         tableName: 'knex_migrations'
      }
   },

   production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
         directory: './database/migrations'
      },
      seeds: {
         directory: './database/seeds'
      },
      pool: {
         min: 2,
         max: 10
      }
   }
};
