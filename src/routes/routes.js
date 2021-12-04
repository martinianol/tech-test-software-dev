const express = require('express')
const router = express.Router()

/**
 * Controllers
 */

const controllerIndex = require('../controller/index')
const controllerSkill = require('../controller/skills')
const controllerExperience = require('../controller/experiences')

/**
 * Routes
 */

router.get('/', controllerIndex.home)
router.get('/yourJobs', controllerIndex.yourJobs)
router.get('/findJobs', controllerIndex.findJobs)

router.get('/search', controllerIndex.search)
router.get('/search/experiences', controllerIndex.searchExperiences)

router.get('/users/:publicId/strengths/:strengthId', controllerSkill.skill)
router.get('/users/:publicId/experiences/:experienceId', controllerExperience.experience)

module.exports = router