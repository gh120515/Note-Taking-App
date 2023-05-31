const express = require('express');
const path = require ('path');

// import modular routers for /api and /(html)
const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');
// use the application
const app = express();

// create port (for app deployment to Heroku & local server)
const PORT = process.env.PORT || 3001;

// static & parse JSON body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

// middleware routing
app.use(apiRoutes);
app.use(htmlRoutes);

// initialise server & display in console
app.listen(PORT, () => {
    console.log(`App listening at localhost ${PORT} (http://localhost:${PORT})`);
});