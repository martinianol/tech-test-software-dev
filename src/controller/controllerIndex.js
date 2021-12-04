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

    // The following array is here to pass the skill level and its icons to the profile view
    const strengthsLevel = [{ name: "master", icon: "fas fa-biking" }, { name: "expert", icon: "fas fa-skating" }, { name: "proficient", icon: "fas fa-running" }, { name: "competent", icon: "fas fa-walking" }, { name: "novice", icon: "fas fa-male" }, { name: "no-experience-interested", icon: "fas fa-baby" }]

    res.render('profile.ejs', { user, strengthsLevel })
  }

}

module.exports = controller