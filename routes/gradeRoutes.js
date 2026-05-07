const express = require("express");
const router = express.Router();

const { addGrade, getGrades } = require("../controllers/gradeController");

router.post("/", addGrade);
router.get("/", getGrades);

module.exports = router;