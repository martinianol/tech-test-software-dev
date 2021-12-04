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

  yourJobs: async (req, res) => {
    res.render('yourJobs.ejs')
  },

  findJobs: async (req, res) => {
    res.render('findJobs.ejs')
  },

  searchUser: async (req, res) => {
    let userToFind = req.query.keyword;

    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound, userToFind });
    }

    res.render('profile.ejs', { user, strengthLevels, iconByStrength })
  },

  searchExperiences: async (req, res) => {
    let userToFind = req.query.keyword;

    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();

    if (user.code == errorCode) {
      let notFound = user
      return res.render('yourJobs.ejs', { notFound, userToFind });
    }

    res.render('listJobs.ejs', { user })
  }
}

module.exports = controller