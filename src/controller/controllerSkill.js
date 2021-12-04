const fetch = require('node-fetch');
const strengthLevel = require('../utils/hardCodedHelpers')
/**
 * Env vars 
 */

const url = process.env.URL
const errorCode = process.env.ERROR_CODE

/**
 * Controllers
 */

const controller = {

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

    const proficiency = strengthLevel.find(strengthLevel => strengthLevel.name === strength.proficiency)

    const icon = proficiency.icon

    res.render('skill.ejs', { user, strength, icon })
  },

}

module.exports = controller