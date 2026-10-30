var express = require("express");
var jwt = require("jsonwebtoken");
var cors = require("cors");

var app = express();
app.use(cors());

app.get("/login", (req, res) => {
  var token = jwt.sign(
    { username: req.query.username, password: req.query.password },
    "rukku is beautiful",
  );
  res.send(token);
});

var studentRoutes = require("./student.router");

app.use("/student", studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
