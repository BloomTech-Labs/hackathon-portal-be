
exports.up = function(knex) {
  return knex.schema.createTable('hackathon_judges', tbl => {
      tbl.increments();
      tbl.integer('user_id')
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
      tbl.integer('project_submission_id')
        .notNullable()
        .references('id')
        .inTable('project_submission')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.string('feedback')
        .notNullable()
      tbl.integer('score')
        .notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('hackathon_judges')
};
