const fetch = require('node-fetch');
const strengthLevel = require('../utils/hardCodedHelpers')
/**
 * Env vars 
 */

const url = process.env.URL_GENOME
const errorCode = process.env.ERROR_CODE

/**
 * Controllers
 */

const controller = {

  skill: async (req, res) => {
    let publicId = req.params.publicId;
    let strengthId = req.params.strengthId;

    const responseStrength = await fetch(`${url}${publicId}/strengths-skills/${strengthId}/detail`);
    const strength = await responseStrength.json();

    const responseUser = await fetch(`${url}${publicId}`)
    const user = await responseUser.json();

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound });
    }

    const proficiency = strengthLevel.find(strengthLevel => strengthLevel.name === strength.stats.proficiency)

    const icon = proficiency.icon

    res.render('skill.ejs', { user, strength, icon })
  },

}

module.exports = controller