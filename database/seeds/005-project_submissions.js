
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_submission').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_submission').insert([
        {project_id: 1, github_url:'github.com' , deployed_url:'randomurl' , video_url: 'http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4'},
        {project_id: 2, github_url:'github.com' , deployed_url:'randomurl' , video_url: 'http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4'},
        {project_id: 3, github_url:'github.com' , deployed_url:'randomurl' , video_url: 'http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4'},
        {project_id: 4, github_url:'github.com', deployed_url:' randomurl' , video_url: 'http://res.cloudinary.com/demo/video/upload/v1427018743/ygzxwxmflekucvqcrb8c.mp4'},
        
      ]);
    });
};
