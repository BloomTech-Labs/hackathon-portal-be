exports.up = function (knex) {
    return knex.schema
      .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('title')
        .notNullable()
        tbl.string('description', 1500)
        .notNullable()
        tbl.boolean('is_approved')
        .notNullable()
        .defaultTo(false)
        tbl.integer('creator_id') // person that's submitting the project
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.integer('hackathon_id')
        .notNullable()
        .references('id')
        .inTable('hackathons')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.boolean('submitted')
        .defaultTo(false)
        tbl.integer('front_end_spots')
        .notNullable()
        tbl.integer('back_end_spots')
        .notNullable()
        tbl.integer('ios_spots')
        .notNullable()
        tbl.integer('android_spots')
        .notNullable()
        tbl.integer('data_science_spots')
        .notNullable()
        tbl.integer('ux_spots')
        .notNullable()
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('projects')
  };
  
  
  
  
  