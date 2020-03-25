function validateHackathon(hackathon) {
   let errors = [];

   if (!hackathon.location || hackathon.location.trim().length <= 0) {
      errors.push('Please include a hackathon location.');
   }
   if (!hackathon.name || hackathon.name.trim().length <= 0) {
      errors.push('Please include a hackathon name.');
   }
   if (!hackathon.description || hackathon.description.trim().length <= 0) {
      errors.push('Please include a hackathon description.');
   }
   return {
      isSuccessful: errors.length > 0 ? false : true,
      errors
   };
}


module.exports = {
   validateHackathon
};
