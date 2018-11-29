const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const Meeting = require("../models/Meeting");
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

router.get('/user/main', ensureLoggedIn(), (req, res) => {
  const id = req.user.id;
  const name = req.user.name;

  User.find({ role: 'SOY PROFE' })
    .then(teacherList => {
      Meeting.find({ teacher: id })
        .then(meetings => {
          console.log(meetings)
          console.log(id, 'Renderiza bien el id ')
          console.log(teacherList)
          res.render('user/main', {
            id,
            name,
            meetings,
            teacherStr: JSON.stringify(teacherList)
    
          });
        })
        .catch(err => {
          res.render("user/main", { message: "Something went wrong" });
        })
    })

});

router.get('/user/addEvent', (req, res, next) => {
  res.render('user/addEvent');
});

router.post("/user/main/:id", (req, res, next) => {

  // const { id } = req.params.id;
  // console.log('IDddddddddddddddd',id)
  // const { password } = req.body;

  User.findById(req.params.id)
    .then(thisUser => {
      meeting = new Meeting();
      meeting.teacher = thisUser._id;
      meeting.title = req.body.title;
      return meeting.save();
    })
    .catch(err => next(err));

  // console.log(req.params.id);
  // console.log(id);
  // console.log(role);
  // console.log('KJEFGHEKLGJEKDFJ SOY YOOOOOOOOOOOOO');


  //console.log(req.body);
  //Meeting.find()
  res.redirect("/user/main")
});




module.exports = router;