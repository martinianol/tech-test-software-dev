const express = require('express') // Require express module
const app = express() //Declare const app where we will be using all express methods.


//Setting route of statics resources (css, js, etc.)//
const path = require('path')
publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath))


//Require and implementing cors so we can use APIs and browser does not block the request//
const cors = require('cors')
app.use(cors())

//Setting EJS engine and views folder//
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Setting express so we can work with data sent from forms//
app.use(express.urlencoded({ extended: false })) // with this line we can use body data from form
app.use(express.json())

//The following 2 lines are used in case PUT and DELETE requests are needed//
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//Server settings
const port = process.env.PORT || 3000// use port 3000 unless there exists a preconfigured port (e.g. Heroku)//
app.listen(port, () =>
  console.log('Server up and running at ' + port + '\n' + 'Torre is the best place to work!!!')
)

app.use('/', (req, res, next) => res.render('index.ejs'))
// Rooute 404
app.use((req, res, next) => {
  res.status(404).render('404.ejs')
})
