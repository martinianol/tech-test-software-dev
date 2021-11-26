//Require express and Router method
const express = require('express')
const router = express.Router()

//Require controller
const controller = require('../controller/controller')

//Assign each route to controller
router.get('/', controller.home)
router.get('/search', controller.search)
router.get('/users/:publicId/strengths/:strengthId', controller.skill)


module.exports = router