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

  home: async (req, res) => {
    res.render('index.ejs')
  },

  search: async (req, res) => {
    let userToFind = req.query.keyword;

    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound, userToFind });
    }

    res.render('profile.ejs', { user })
  },

  skill: async (req, res) => {
    let publicId = req.params.publicId;
    let strengthId = req.params.strengthId;

    const response = await fetch(`${url}${publicId}`);
    const user = await response.json();

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound });
    }

    const strengths = user.strengths;

    const strength = strengths.find(strength => strength.id === strengthId);

    res.render('skill.ejs', { user, strength })
  },

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