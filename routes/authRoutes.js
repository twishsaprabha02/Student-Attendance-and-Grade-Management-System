const express = require("express");

const router = express.Router();

const teacher = {
    username: "teacher",
    password: "1234"
};

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (
        username === teacher.username &&
        password === teacher.password
    ) {

        res.json({
            success: true,
            message: "Login successful"
        });

    } else {

        res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });
    }
});

module.exports = router;

