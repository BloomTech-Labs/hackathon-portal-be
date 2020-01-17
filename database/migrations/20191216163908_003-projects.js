
exports.up = function (knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments()
      tbl.string('title')
      .notNullable()
      tbl.string('description')
      .notNullable()
      tbl.boolean('is_approved')
      .notNullable()
      .defaultTo(false)
      tbl.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT')
      tbl.integer('hackathon_id')
      .notNullable()
      .references('id')
      .inTable('hackathons')
      .onUpdate('RESTRICT')
      .onDelete('RESTRICT')
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
