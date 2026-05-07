const express = require("express");
const router = express.Router();

const { addStudent, getStudents, deleteStudent, updateStudent } = require("../controllers/studentController");

router.post("/", addStudent);
router.get("/", getStudents);

router.delete("/:index", deleteStudent);
router.put("/:index", updateStudent);

module.exports = router;
