var express = require("express");
var router = express.Router();
var fs = require("fs");

const {
  getStudentByIdController,
  getAllStudentsController,
} = require("./student.controller");

router.get("/getAllStudents", getAllStudentsController);

router.get("/getStudentById/:id", getStudentByIdController);

module.exports = router;
