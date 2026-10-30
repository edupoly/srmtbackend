var fs = require("fs");

function getAllStudentsController(req, res) {
  var data = JSON.parse(fs.readFileSync("students.txt").toString());
  res.send(data);
}

function getStudentByIdController(req, res) {
  var data = JSON.parse(fs.readFileSync("students.txt").toString());
  var std = data.find((student) => {
    if (student.id == req.params.id) {
      return true;
    }
  });
  res.send(std);
}

module.exports = { getAllStudentsController, getStudentByIdController };
