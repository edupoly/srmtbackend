var express = require("express");
var app = express();
var studentRoutes = require("./student.router");

app.use("/student", studentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server running on ${process.env.PORT}`);
});
