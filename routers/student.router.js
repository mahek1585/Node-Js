const express = require('express')
const { getStudentList, getStudent } = require("../controllers/student.controller");

const studentRouter = express.Router();

 
studentRouter.get('/', getStudentList);


studentRouter.get("/:id", getStudent);

studentRouter.get("/", addStudent);



module.exports = studentRouter;