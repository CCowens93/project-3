const express = require('express')

const app = express()

const { portfolioRouter } = require('./controllers/portfolio.js')
const { artistRouter } = require('./controllers/artist.js')
const { meetUpRouter } = require('./controllers/meetUp.js')

// const { contactRouter } = require('./controllers/contactRouter.js')


/* Step 3
 *
 * Register middleware...
 */

/* Step 3.a
 * ...to parse the body of the HTTP requests from a URL encoded string 
 */
app.use(express.urlencoded({extended: true}))

/* Step 3.b 
 *
 * ...to parse the body of the HTTP requests from a JSON string  
 */
app.use(express.json())


/* Step 3.c
 *
 * use the `./client/build` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(`${__dirname}/client/build`))


/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
// app.use('/api/writings', writingsRouter)
app.use('/api/artist', artistRouter)
app.use('/api/portfolio', portfolioRouter)
app.use('/api/meetUp', meetUpRouter)


/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /api/... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

/* Step 6
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 3001

/* Step 7
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
