const express = require('express')
const User = require('./userModel');
var router = express.Router()


router.post('/register', function (req, res) {

  // TODO: data validation , send 400 if bad request 

  let user = {
    name: req.body.name,
    email: req.body.email,
    pass: req.body.pass,
  }


  User.model.create(user)
    .then((newUser) => {




      //TODO: add the user to DB and return 

      res.status(200).json({
        message: "registration successful",
        user: newUser
      })

    })
})

router.post('/login', function (req, res) {
  let email = req.body.email;
  let pass = req.body.pass

  let user = User.model.getUserByEmail(email);
  if (user) {
    User.model.comparePassword(pass, user.pass)
      .then((passwordsMatch) => {
        if (passwordsMatch) {
          //TODO: generate token 
          res.status(200).json({
            token: '',
            user: {
              name: user.name,
              email: user.email,
            }
          })
        }
        else {
          res.status(400).json({
            message: "passwords don't match"
          })
        }
      })
  }
  else {
    res.status(404).json({
      message: "user not found"
    })
  }





})




module.exports = router