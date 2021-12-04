const express = require('express')
const router = express.Router()

/**
 * Controllers
 * Mars: I have separated the logic in different controllers as requested in last bullet from the feedback email. I do not consider it necessary on this scale, however I understand you are thinking for a large scale applications. OK 
 */

const controllerIndex = require('../controller/controllerIndex')
const controllerSkill = require('../controller/controllerSkill')
const controllerExperience = require('../controller/controllerExperience')

/**
 * Routes
 */

router.get('/', controllerIndex.home)
router.get('/search', controllerIndex.search)
router.get('/users/:publicId/strengths/:strengthId', controllerSkill.skill)
router.get('/users/:publicId/experiences/:experienceId', controllerExperience.experience)


module.exports = router