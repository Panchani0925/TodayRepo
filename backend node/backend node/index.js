require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Default MySQL user
    password: "", // Leave empty if no password is set
    database: "mydatabase", // Change this to your actual database name
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
        return;
    }
    console.log("Connected to MySQL database");
});

// Fetch All Users
// Fetch all students
app.get("/users", (req, res) => {
    db.query("SELECT id, name, password, status FROM users", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Student
app.post("/users", (req, res) => {
    const { name, password, status } = req.body;
    const sql = "INSERT INTO users (name, password, status) VALUES (?, ?, ?)";
    db.query(sql, [name, password, status], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student added successfully", id: result.insertId });
        }
    });
});

// Update a Student
app.put("/users/:id", (req, res) => {
    const { name, password, status } = req.body;
    const sql = "UPDATE users SET name = ?, password = ?, status = ? WHERE id = ?";
    db.query(sql, [name, password, status, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student updated successfully" });
        }
    });
});

// Delete a Student
app.delete("/users/:id", (req, res) => {
    const sql = "DELETE FROM users WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student deleted successfully" });
        }
    });
});

// Toggle Student Status (Active/Inactive)
app.patch("/users/:id/status", (req, res) => {
    const { status } = req.body;
    const sql = "UPDATE users SET status = ? WHERE id = ?";
    db.query(sql, [status, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Student status updated successfully" });
        }
    });
});

// Fetch all teachers
app.get("/teachers", (req, res) => {
    db.query("SELECT id, name, password FROM teachers", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Teacher
app.post("/teachers", (req, res) => {
    const { name, password } = req.body;
    const sql = "INSERT INTO teachers (name, password) VALUES (?, ?)";
    db.query(sql, [name, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Teacher added successfully", id: result.insertId });
        }
    });
});

// Delete a Teacher
app.delete("/teachers/:id", (req, res) => {
    const sql = "DELETE FROM teachers WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Teacher deleted successfully" });
        }
    });
});

// Fetch all parents
app.get("/parents", (req, res) => {
    db.query("SELECT id, name, password FROM parents", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Parent
app.post("/parents", (req, res) => {
    const { name, password } = req.body;
    const sql = "INSERT INTO parents (name, password) VALUES (?, ?)";
    db.query(sql, [name, password], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Parent added successfully", id: result.insertId });
        }
    });
});

// Delete a Parent
app.delete("/parents/:id", (req, res) => {
    const sql = "DELETE FROM parents WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Parent deleted successfully" });
        }
    });
});


// Fetch All Classes
app.get("/classes", (req, res) => {
    db.query("SELECT * FROM classes", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Class
app.post("/classes", (req, res) => {
    const { name, teacher, subject } = req.body;
    const sql = "INSERT INTO classes (name, teacher, subject) VALUES (?, ?, ?)";
    db.query(sql, [name, teacher, subject], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Class added successfully", id: result.insertId });
        }
    });
});

// Update a Class
app.put("/classes/:id", (req, res) => {
    const { name, teacher, subject } = req.body;
    const sql = "UPDATE classes SET name = ?, teacher = ?, subject = ? WHERE id = ?";
    db.query(sql, [name, teacher, subject, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Class updated successfully" });
        }
    });
});

// Delete a Class
app.delete("/classes/:id", (req, res) => {
    const sql = "DELETE FROM classes WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Class deleted successfully" });
        }
    });
});

app.get("/courses", (req, res) => {
    db.query("SELECT * FROM courses", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.post("/courses", (req, res) => {
    const { name, description } = req.body;
    const sql = "INSERT INTO courses (name, description, students) VALUES (?, ?, 0)";
    db.query(sql, [name, description], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course added successfully", id: result.insertId });
        }
    });
});

// Fetch All Courses (New Function)
app.get("/all-courses", (req, res) => {
    db.query("SELECT id, name, description FROM courses", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add a New Course (students column defaults to 0)
app.post("/new-course", (req, res) => {
    const { name, description } = req.body;
    const sql = "INSERT INTO courses (name, description, students) VALUES (?, ?, 0)";
    db.query(sql, [name, description], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course added successfully", id: result.insertId });
        }
    });
});

// Update an Existing Course
app.put("/update-course/:id", (req, res) => {
    const { name, description } = req.body;
    const sql = "UPDATE courses SET name = ?, description = ? WHERE id = ?";
    db.query(sql, [name, description, req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course updated successfully" });
        }
    });
});

// Delete a Course
app.delete("/remove-course/:id", (req, res) => {
    const sql = "DELETE FROM courses WHERE id = ?";
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Course deleted successfully" });
        }
    });
});


app.get("/assignments/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const sql = "SELECT * FROM assignments WHERE course_id = ?";
    db.query(sql, [courseId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.post("/assignments", (req, res) => {
    const { course_id, title, description, due_date } = req.body;
    const sql = "INSERT INTO assignments (course_id, title, description, due_date) VALUES (?, ?, ?, ?)";
    db.query(sql, [course_id, title, description, due_date], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Assignment added successfully", id: result.insertId });
        }
    });
});

app.get("/resources/:courseId", (req, res) => {
    const courseId = req.params.courseId;
    const sql = "SELECT * FROM resources WHERE course_id = ?";
    db.query(sql, [courseId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Add new resource (Only Links)
app.post("/resources", (req, res) => {
    const { course_id, title, type, link } = req.body;

    // Ensure the link can be nullable
    const sql = "INSERT INTO resources (course_id, title, type, link) VALUES (?, ?, ?, ?)";
    db.query(sql, [course_id, title, type, link || null], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Resource added successfully", id: result.insertId });
        }
    });
});

// Fetch all courses with their live class schedules
app.get("/course-schedules", (req, res) => {
    const sql = `
        SELECT courses.id AS course_id, courses.name AS course_name, 
               live_classes.title, live_classes.description, 
               live_classes.date, live_classes.time 
        FROM courses
        LEFT JOIN live_classes ON courses.id = live_classes.course_id
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});


// Add a new live class
app.post("/live-classes", (req, res) => {
    const { course_id, title, description, date, time } = req.body;
    const sql = "INSERT INTO live_classes (course_id, title, description, date, time) VALUES (?, ?, ?, ?, ?)";
    
    db.query(sql, [course_id, title, description, date, time], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Live class added successfully", id: result.insertId });
        }
    });
});

// Fetch all feedback with student details
app.get("/feedback", (req, res) => {
    const sql = `
        SELECT feedback.id, feedback.message, users.name AS student 
        FROM feedback
        INNER JOIN users ON feedback.user_id = users.id
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Fetch notifications (Live Classes and Feedback)
app.get("/notifications", (req, res) => {
    const sql = `
        SELECT id, 'Live Class' AS type, title AS message, description AS details, date AS created_at
        FROM live_classes
        UNION 
        SELECT feedback.id, 'Feedback' AS type, feedback.message, users.name AS details, NOW() AS created_at
        FROM feedback
        INNER JOIN users ON feedback.user_id = users.id
        ORDER BY created_at DESC
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/study-resources", (req, res) => {
    const sql = `
        SELECT r.id, r.course_id, r.title, r.type, r.link, c.name as course_name 
        FROM resources r
        JOIN courses c ON r.course_id = c.id
    `;
    
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/scheduled-live-classes", (req, res) => {
    const sql = `
        SELECT lc.id, lc.course_id, lc.title, lc.description, lc.date, lc.time, c.name AS course_name
        FROM live_classes lc
        JOIN courses c ON lc.course_id = c.id
        ORDER BY lc.date ASC, lc.time ASC
    `;
    
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/assignment-notifications", (req, res) => {
    const sql = `
        SELECT a.id, a.course_id, a.title, a.description, a.due_date, c.name AS course_name
        FROM assignments a
        JOIN courses c ON a.course_id = c.id
        ORDER BY a.due_date ASC
    `;
    
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/upcoming-deadlines", (req, res) => {
    const sql = `
        SELECT a.id, a.course_id, a.title, a.description, a.due_date, c.name AS course_name
        FROM assignments a
        JOIN courses c ON a.course_id = c.id
        WHERE a.due_date >= CURDATE()
        ORDER BY a.due_date ASC
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/feedback", (req, res) => {
    const sql = `
        SELECT feedback.id, feedback.message, users.name AS student 
        FROM feedback
        INNER JOIN users ON feedback.user_id = users.id
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/progress", (req, res) => {
    const sql = `
        SELECT 
            progress.user_id, 
            users.name AS user_name, 
            progress.course_id, 
            courses.name AS course_name, 
            progress.score 
        FROM progress
        JOIN users ON progress.user_id = users.id
        JOIN courses ON progress.course_id = courses.id
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/progress", (req, res) => {
    const sql = `
        SELECT 
            progress.user_id, 
            users.name AS user_name, 
            progress.course_id, 
            courses.name AS course_name, 
            progress.score 
        FROM progress
        JOIN users ON progress.user_id = users.id
        JOIN courses ON progress.course_id = courses.id
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Fetch messages for a course
app.get("/discussion/:course_id", (req, res) => {
    const courseId = req.params.course_id;
    const sql = "SELECT * FROM discussion_forum WHERE course_id = ?";
    db.query(sql, [courseId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Post a new message in the discussion forum
app.post("/discussion", (req, res) => {
    const { course_id, message } = req.body;
    const sql = "INSERT INTO discussion_forum (course_id, message) VALUES (?, ?)";
    db.query(sql, [course_id, message], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Message posted successfully", id: result.insertId });
        }
    });
});


// Assign Parent to a Student
app.post("/assign-parent", (req, res) => {
    const { student_id, parent_id } = req.body;
    const sql = "INSERT INTO parent_student (student_id, parent_id) VALUES (?, ?)";
    
    db.query(sql, [student_id, parent_id], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Parent assigned to student successfully" });
        }
    });
});

// Get Parent-Student Relationships
app.get("/parent-student", (req, res) => {
    const sql = `
        SELECT ps.id, u1.name AS student_name, u2.name AS parent_name 
        FROM parent_student ps
        JOIN users u1 ON ps.student_id = u1.id
        JOIN parents u2 ON ps.parent_id = u2.id
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/student-performance", (req, res) => {
    const parentId = 1; // Assume parent_id = 1 by default

    const sql = `
        SELECT 
            users.name AS student_name,
            courses.name AS course_name,
            progress.score
        FROM progress
        JOIN users ON progress.user_id = users.id
        JOIN courses ON progress.course_id = courses.id
        JOIN parent_student ON parent_student.student_id = users.id
        WHERE parent_student.parent_id = ?
    `;

    db.query(sql, [parentId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/student-performance", (req, res) => {
    const parentId = 1; // Default Parent ID

    const sql = `
        SELECT 
            users.name AS student_name,
            courses.name AS course_name,
            progress.score
        FROM progress
        JOIN users ON progress.user_id = users.id
        JOIN courses ON progress.course_id = courses.id
        JOIN parent_student ON parent_student.student_id = users.id
        WHERE parent_student.parent_id = ?
    `;

    db.query(sql, [parentId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// New API for fetching student scores by subject
app.get("/student-performance-subjects", (req, res) => {
    const parentId = 1; // Default Parent ID

    const sql = `
        SELECT 
            users.name AS student_name,
            courses.name AS course_name,
            progress.score
        FROM progress
        JOIN users ON progress.user_id = users.id
        JOIN courses ON progress.course_id = courses.id
        JOIN parent_student ON parent_student.student_id = users.id
        WHERE parent_student.parent_id = ?;
    `;

    db.query(sql, [parentId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Fetch students with low scores
app.get("/low-score-alerts/:parentId", (req, res) => {
    const parentId = req.params.parentId;

    const sql = `
        SELECT 
            users.name AS student_name,
            courses.name AS course_name,
            progress.score
        FROM progress
        JOIN users ON progress.user_id = users.id
        JOIN courses ON progress.course_id = courses.id
        JOIN parent_student ON parent_student.student_id = users.id
        WHERE parent_student.parent_id = ? AND progress.score < 50;
    `;

    db.query(sql, [parentId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Fetch engagement tracking data
app.get("/engagement-tracking", (req, res) => {
    const sql = `
        SELECT 
            engagement_tracking.user_id,
            users.name AS student_name,
            engagement_tracking.no_of_hours,
            engagement_tracking.day
        FROM engagement_tracking
        JOIN users ON engagement_tracking.user_id = users.id;
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Fetch all courses dynamically
app.get("/api/courses", (req, res) => {
    db.query("SELECT id, name, description, students FROM courses", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Fetch all teachers dynamically
app.get("/api/teachers", (req, res) => {
    db.query("SELECT id, name FROM teachers", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

app.get("/api/feedback", (req, res) => {
    const sql = `
        SELECT feedback.id, feedback.message, users.name AS student 
        FROM feedback
        INNER JOIN users ON feedback.user_id = users.id
    `;

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Get the total number of students
app.get("/api/students/count", (req, res) => {
    db.query("SELECT COUNT(*) AS count FROM users", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ students: result[0].count });
        }
    });
});

// Get the total number of teachers
app.get("/api/teachers/count", (req, res) => {
    db.query("SELECT COUNT(*) AS count FROM teachers", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ teachers: result[0].count });
        }
    });
});

// Get the total number of subjects (courses)
app.get("/api/subjects/count", (req, res) => {
    db.query("SELECT COUNT(*) AS count FROM courses", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ subjects: result[0].count });
        }
    });
});

// Fetch All Available Courses
app.get("/api/available-courses", (req, res) => {
    const sql = "SELECT id, name, description, students FROM courses";
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// Endpoint to handle form submissions
app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const sql = "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";
    db.query(sql, [name, email, message], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: "Message sent successfully!" });
        }
    });
});

// Fetch all contact messages
app.get("/api/contact-messages", (req, res) => {
    db.query("SELECT * FROM contact_messages ORDER BY created_at DESC", (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(result);
        }
    });
});

// User Login Route
app.post("/api/login", (req, res) => {
    const { name, password, role } = req.body;

    let table = "";
    if (role === "user") table = "users";
    else if (role === "teacher") table = "teachers";
    else if (role === "parent") table = "parents";
    else return res.status(400).json({ error: "Invalid role selected" });

    const sql = `SELECT * FROM ${table} WHERE name = ? AND password = ?`;
    db.query(sql, [name, password], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.length === 0) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful", role });
    });
});


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
