// reads in express npm package
const express = require("express");

// Creates express server
const app = express();

// Establishes dynamic port for Heroku compatability
const PORT = process.env.PORT || 3033;

// Allows for accurate body parsing
app.use(express.urlencoded({ extended: true }));

// Allows express to recognize JSON responses
app.use(express.json());

// Tells express to look for static js files in public folder
app.use(express.static('public'));

// Reads in html and API routing
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Tells server to listen on desired PORT
app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
  });