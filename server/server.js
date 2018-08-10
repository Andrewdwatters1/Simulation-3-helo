const express = require('express');
const session = require('express-session');
const static = require('express-static');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT;
const controller = require('./controller')

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

app.post(`/api/auth/register`, controller.registerUser)
app.post(`/api/auth/login`, controller.loginUser)
app.get(`/api/currentUser`, (req, res) => {
  if(req.body.length) {
    res.send(req.body[0])
  } else {
    res.end()
  }
})
// DEFINE ENDPTS

app.listen(port, () => {
  console.log('We are live baby! Port ==> ', port);
})