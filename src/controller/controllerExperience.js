const fetch = require('node-fetch');

/**
 * Env vars 
 */

const url = process.env.URL
const errorCode = process.env.ERROR_CODE

/**
 * Controllers
 */

const controller = {

  experience: async (req, res) => {
    let publicId = req.params.publicId;
    let experienceId = req.params.experienceId;

    const response = await fetch(`${url}${publicId}`);
    const user = await response.json();

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound });
    }

    const experiences = user.experiences;

    const experience = experiences.find(experience => experience.id === experienceId);

    res.render('experience.ejs', { user, experience })
  }
}

module.exports = controller