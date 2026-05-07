const grades = [];

exports.addGrade = (req, res) => {
    const data = req.body;

    data.forEach(g => {
        grades.push(g);
    });

    res.json({ message: "Grades saved for all students" });
};

exports.getGrades = (req, res) => {
    res.json(grades);
};