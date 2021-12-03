require('dotenv').config()

const express = require('express')
const cors = require('cors')
const methodOverride = require('method-override')
const path = require('path')

const routes = require('./routes/routes')
const apiRoutes = require('./routes/APIroutes/routes');



/**
 * Constants
 */

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

/**
 * Setup
 */

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/**
 * Middlewares
 */

app.use(cors())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(publicPath))

/**
 * Routes
 */

app.use('/', routes)

app.use('/api/', apiRoutes)
/* app.use((req, res, next) => {
  res.status(404).render('404.ejs')
}) */

/**
 * 
 */

app.listen(port, () =>
  console.log('Server up and running at ' + port + '\n' + 'Torre is the best place to work!!!')
)
