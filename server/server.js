const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const path = require('path')

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
app.use(express.static(`${__dirname}/../build`)) // typically production builds only


app.post(`/api/auth/register`, controller.registerUser)
app.post(`/api/auth/login`, controller.loginUser)
app.get(`/api/currentUser`, (req, res) => {
  if(req.body.length) {
    res.send(req.body[0])
  } else {
    res.end()
  }
})
app.get(`/api/posts/:id?search=search&userposts=userposts`, controller.read)
app.get(`/api/posts/`, controller.readPosts)
// DEFINE ENDPTS

app.get('/*', function(req, res) { // production builds only
  res.sendFile(path.join(__dirname, '../build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => {
  console.log('We are live baby! Port ==> ', port);
})