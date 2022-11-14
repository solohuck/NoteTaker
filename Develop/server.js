const express = require('express'); 

// initialize express 
const app = express();

// variable port
const PORT = process.env.PORT || 3001;

// create a route for every file in the public directory 
app.use(express.static('public'));

// sets up express to deal with data parser 
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// routes 

require('./public/routes/api')
require('./public/routes/html')

// Starts the server
app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}🚀`)
);