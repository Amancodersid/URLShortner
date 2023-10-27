const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
const { routes } = require('./Routes');

//connect to the database
mongoose
  .connect(process.env.MONGOURL)
  .then(() => console.log("mongoose is connected...."))
  .catch((e) => {
    console.log("mongose is not connected");
  });

  app.use(express.json())
  app.use('/',routes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running fine on ${process.env.PORT}`);
})