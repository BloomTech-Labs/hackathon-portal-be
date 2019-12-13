
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments()
      tbl.varchar('username', 255)
      .unique()
      .notNullable()
      tbl.string('password')
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('users')
};
