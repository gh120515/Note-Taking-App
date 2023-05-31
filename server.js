// import packages
const express = require('express');

// use the application
const app = express();

// create port (for app deployment to Heroku & local server)
const PORT = process.env.PORT || 3001;

// initialise server & display in console
app.listen(PORT, () => {
    console.log(`App listening at localhost${PORT}`);
});