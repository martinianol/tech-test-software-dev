const fetch = require('node-fetch');
const { strengthLevels, iconByStrength } = require('../utils/helpers')

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

    res.render('profile.ejs', { user, strengthLevels, iconByStrength })
  }
}

module.exports = controller