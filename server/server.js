const express = require('express');
const session = require('express-session');
const static = require('express-static');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;


massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('Database is linked boyz! ');
})

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))

// DEFINE ENDPTS

app.listen(port, () => {
  console.log('We are live baby! Port ==> ', port);
})