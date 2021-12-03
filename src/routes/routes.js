const express = require('express')
const router = express.Router()

/**
 * Controllers
 */

const controller = require('../controller/controller')


/**
 * Routes
 */

router.get('/', controller.home)
router.get('/search', controller.search)
router.get('/users/:publicId/strengths/:strengthId', controller.skill)
router.get('/users/:publicId/experiences/:experienceId', controller.experience)


module.exports = router