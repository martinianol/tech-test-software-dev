const fetch = require('node-fetch');

/**
 * Env vars 
 */

const url = process.env.URL_JOBS
const errorCode = process.env.ERROR_CODE

/**
 * Controllers
 */

const controller = {

  findJobs: async (req, res) => {

    const response = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const responseJson = await response.json()

    const jobs = responseJson.results
    //return res.send(jobs)

    res.render('jobs.ejs', { jobs })
  }
}

module.exports = controller