exports.up = function (knex) {
    return knex.schema
      .createTable('users', tbl => {
        tbl.varchar('id')
        tbl.string('first_name')
        tbl.string('last_name')
        tbl.varchar('username', 255)
          .unique()
        tbl.varchar('email', 255)
          .unique()
        tbl.string('password')
        tbl.boolean('email_Verified')
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('users')
  };
  
  