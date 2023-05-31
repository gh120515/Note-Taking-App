const express = require('express');

// import modular routers for /api and /(html)
const apiRoutes = require('./Develop/routes/apiRoutes.js');
// const htmlRoutes = require('./Develop/routes/htmlRoutes.js');
// use the application
const app = express();

// create port (for app deployment to Heroku & local server)
const PORT = process.env.PORT || 3001;

// parse JSON body
app.use(express.json());
// static
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// middleware routing
app.use(apiRoutes);
// app.use(htmlRoutes);

// initialise server & display in console
app.listen(PORT, () => {
    console.log(`App listening at localhost ${PORT} (http://localhost:${PORT})`);
});