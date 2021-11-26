const fetch = require('node-fetch');

const controller = {

  home: async (req, res) => {
    res.render('index.ejs')
  },

  search: async (req, res) => {
    let userToFind = req.query.keyword;
    console.log(userToFind);
    let url = 'https://bio.torre.co/api/bios/';

    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();

    let errorCode = '011002';

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound, userToFind });
    }

    const strengths = user.strengths;

    res.render('profile.ejs', { user })
  },

  skill: async (req, res) => {
    let publicId = req.params.publicId;
    let strengthId = req.params.strengthId;

    let url = 'https://bio.torre.co/api/bios/';
    const response = await fetch(`${url}${publicId}`);
    const user = await response.json();

    let errorCode = '011002';

    if (user.code == errorCode) {
      let notFound = user
      return res.render('index.ejs', { notFound });
    }

    const strengths = user.strengths;

    const strength = strengths.find(strength => strength.id === strengthId);

    res.render('skill.ejs', { user, strength })
  }
}

module.exports = controller