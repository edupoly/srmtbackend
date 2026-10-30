var express = require("express");
var router = express.Router();
var fs = require("fs");

const {
  getStudentByIdController,
  getAllStudentsController,
} = require("./student.controller");

router.get(
  "/getAllStudents",
  function (req, res, next) {
    console.log("another middleware executed");
    next();
  },
  getAllStudentsController,
);

router.get(
  "/getStudentById/:id",
  function (req, res, next) {
    console.log("rukku middleware executed");
    next();
  },
  getStudentByIdController,
);

module.exports = router;
