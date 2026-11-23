var express = require("express");
var jwt = require("jsonwebtoken");
var cors = require("cors");
var fs = require("fs");
const connectDB = require("./db");

const CourseModel = require("./course.model");

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connectDB();

app.post("/course", (req, res) => {
  console.log(req.body);
  var newCourse = new CourseModel({ ...req.body });
  newCourse.save();
  res.send({ msg: "please wait" });
});

app.post("/login", (req, res) => {
  var users = JSON.parse(fs.readFileSync("users.txt").toString());
  console.log(users);
  console.log(req.body);
  var f = users.find(function (user) {
    if (
      user.username === req.body.username &&
      user.password === req.body.password
    ) {
      return true;
    }
  });
  if (f) {
    var token = jwt.sign(req.body, "rukku look great");
    res.send({ msg: "login success", token: token });
  } else {
    res.send({ msg: "wrong credentials" });
  }
});

var studentRoutes = require("./student.router");

app.use("/student", studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
