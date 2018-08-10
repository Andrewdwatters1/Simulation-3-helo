module.exports = {
  registerUser: (req, res) => {
    let {username, password} = req.body.userInfo
    let db = req.app.get('db')
    db.registerUser([username, password])
  },

  loginUser: (req, res) => {
    let {username, password} = req.body.userInfo;
    let db = req.app.get('db')
    db.loginUser([username, password]).then(result => {
      res.status(200).send(result)
    })
  },
  read: (req, res) => {
    let db = req.app.get('db');
    console.log(req)
    db.getPosts().then(result => {
      res.status(200).send(result)
    })
  },
  readPosts: (req, res) => {
  let db = req.app.get('db');
  db.getAllPosts().then(result => {
    res.status(200).send(result)
  })
  }
}