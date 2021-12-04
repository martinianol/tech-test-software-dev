const fetch = require('node-fetch');

/**
 * Env vars 
 */

const url = process.env.URL_GENOME
const errorCode = process.env.ERROR_CODE

/**
 * Controllers
 */

const controller = {

  experience: async (req, res) => {
    let publicId = req.params.publicId;
    let experienceId = req.params.experienceId;

    const responseUser = await fetch(`${url}${publicId}`)
    const user = await responseUser.json()

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound });
    }

    const responseExperience = await fetch(`${url}${publicId}/jobs/${experienceId}`);
    const experience = await responseExperience.json();

    res.render('experience.ejs', { user, experience })
  }
}

module.exports = controller