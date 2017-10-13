const express = require('express');
const Router = require('express').Router;

// Connect to port defined in environment, otherwise, default to 8080
const port = process.env.PORT || 8080;

const app = express();

const router = Router();

// The example route.
router.get('/', function(req, res) {
  return res.send('HELLO WORLD');
});

app.use(router);

// Start the server!
app.listen(port, function() {
  console.log('Server listening on port ' + port + '. Please go to http://localhost:' + port);
});
