const express = require("express");
const cors = require("cors");

const teacher = {
    username: "teacher",
    password: "1234"
};

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());

// Serve frontend
app.use(express.static("public"));

// Import routes
const studentRoutes = require("./routes/studentRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const gradeRoutes = require("./routes/gradeRoutes");
const authRoutes = require("./routes/authRoutes");

// Use routes
app.use("/api/students", studentRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/grades", gradeRoutes);
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("Server running 🚀");
});


app.listen(5000, () => {
    console.log("Server running on port 5000");
});