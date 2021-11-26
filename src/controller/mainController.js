const fetch = require('node-fetch');

const controller = {

  home: async (req, res) => {

    let url = 'https://bio.torre.co/api/bios/marsleguizamon'
    const response = await fetch(`${url}`);
    const user = await response.json();
    res.render('index.ejs', { user })
  }
}

module.exports = controller