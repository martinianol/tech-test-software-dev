const fetch = require('node-fetch');
const { iconByStrength } = require('../utils/helpers')

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

    const responseUser = await fetch(`${url}${publicId}`)
    const user = await responseUser.json();

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound });
    }

    const responseStrength = await fetch(`${url}${publicId}/strengths-skills/${strengthId}/detail`);
    const strength = await responseStrength.json();

    const icon = iconByStrength[strength.stats.proficiency]

    res.render('skill.ejs', { user, strength, icon })
  },

}

module.exports = controller