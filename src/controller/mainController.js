const fetch = require('node-fetch');

const controller = {

  home: async (req, res) => {
    res.render('index.ejs')
  },

  search: async (req, res) => {
    let userToFind = req.query.keyword
    let url = 'https://bio.torre.co/api/bios/'
    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();
    res.render('profile.ejs', { user })
  }
}

module.exports = controller