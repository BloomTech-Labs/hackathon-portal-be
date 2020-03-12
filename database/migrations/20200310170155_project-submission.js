
exports.up = function(knex) {
  return knex.schema.createTable('project_submission', tbl =>  {
      tbl.increments()
      tbl.integer('project_id')
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
      tbl.string('github_url')
      tbl.string('deployed_url')
      tbl.string('video_url')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_submission')
};
