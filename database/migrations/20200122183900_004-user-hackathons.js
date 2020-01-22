exports.up = function (knex) {
    return knex.schema
      .createTable('user_hackathons', tbl => {
        tbl.increments()
        tbl.integer('hackathon_id')
          .notNullable()
          .references('id')
          .inTable('hackathons')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.integer('user_id')
          .notNullable()
          .references('id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.string('user_hackathon_role')
          .notNullable()
        tbl.integer('project_id')
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
        tbl.string('developer_role')
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('user_hackathons')
  };

