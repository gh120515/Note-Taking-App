// import packages
const express = require('express');
// use the application
const app = express();

// create port (for app deployment to Heroku & local server)
const PORT = process.env.PORT || 3001;

// middleware to parse JSON body
app.use(express.json());

// route to handle fetching all notes (in JSON)
require('./Develop/routes/api-routes.js')(app);

// initialise server & display in console
app.listen(PORT, () => {
    console.log(`App listening at localhost ${PORT} (http://localhost:${PORT})`);
});