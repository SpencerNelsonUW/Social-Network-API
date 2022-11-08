const express = require('express');
const db = require('./config/connection');
const routes = require("./routes");
//NEED TO IMPORT MODELS STILL

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//NEED TO IMPORT ROUTES OR CREATE HERE
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });