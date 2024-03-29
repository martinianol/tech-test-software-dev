const fetch = require('node-fetch');

/**
 * Controllers  
 * 
 * NOTE: I've created this apiController as a backend for a React App I was playing with, 
 * you can check it out at https://tech-test-software-dev-react.herokuapp.com/
 * It is not finished though :-)
 */

const controller = {

  search: async (req, res) => {
    let userToFind = req.params.user;
    let url = 'https://bio.torre.co/api/bios/';

    const response = await fetch(`${url}${userToFind}`);
    const user = await response.json();

    let errorCode = '011002';

    if (user.code == errorCode) {
      let notFound = user
      return res.send({ notFound, userToFind });
    }

    res.send({ user })
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
      return res.send({ notFound });
    }

    const strengths = user.strengths;

    const strength = strengths.find(strength => strength.id === strengthId);

    res.send({ user, strength })
  }
}

module.exports = controller