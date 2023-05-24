const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 4000;

const app = express();
const DB = require('./config/db');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const authRoute = require('./routes/auth');
const { notFound, errorHandler } = require('./middleware/errorHandling');

app.use('/api/user', authRoute);

app.use(notFound);
app.use(errorHandler);

const server = () => { 
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`); 
  });
}
DB(server);