//Require express and Router method
const express = require('express')
const router = express.Router()

//Require mainController
const mainController = require('../controller/mainController')

//Assign each route to controller
router.get('/', mainController.home)


module.exports = router