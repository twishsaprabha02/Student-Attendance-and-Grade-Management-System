const students = [];

exports.addStudent = (req, res) => {

    const exists = students.find(
        s => s.rollNo === req.body.rollNo
    );

    if (exists) {
        return res.status(400).json({
            message: "Roll number already exists"
        });
    }

    students.push(req.body);

    res.json({
        message: "Student added successfully"
    });
};

exports.getStudents = (req, res) => {
    res.json(students);
};

exports.deleteStudent = (req, res) => {
    const index = req.params.index;
    students.splice(index, 1);
    res.json({ message: "Student deleted" });
};

exports.updateStudent = (req, res) => {
    const index = req.params.index;

    const { name, rollNo, className } = req.body;

    students[index] = { name, rollNo, className };

    res.json({ message: "Student updated successfully" });
};