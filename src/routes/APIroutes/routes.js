//Require express and Router method
const express = require('express')
const router = express.Router()

//Require controller
const controller = require('../../controller/API/apiController')

//Assign each route to controller
router.get('/search/:user', controller.search)
/* router.get('/apiusers/:publicId/strengths/:strengthId', controller.skill) */


module.exports = router