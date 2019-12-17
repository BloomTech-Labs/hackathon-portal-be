
exports.up = function(knex) {
  return knex.schema
  .createTable('teams', tbl => {
      tbl.increments()
      tbl.string('name')
      tbl.integer('hackathon_id')
      .references('id')
      .inTable('hackathons')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('teams')
};
 