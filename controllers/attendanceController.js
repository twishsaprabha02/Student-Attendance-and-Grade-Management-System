let attendance = [];

exports.markAttendance = (req, res) => {
    const { name, rollNo, status, date } = req.body;

    const exists = attendance.find(
        a => a.rollNo === rollNo && a.date === date
    );

    if (exists) {
        return res.json({ message: "Attendance already marked for this date" });
    }

    attendance.push({ name, rollNo, status, date });

    res.json({ message: "Attendance saved" });
};


exports.getAttendance = (req, res) => {
    res.json(attendance);
};