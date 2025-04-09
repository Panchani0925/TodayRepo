-- Create the database
CREATE DATABASE IF NOT EXISTS edunex_db;
USE edunex_db;

-- Users table (Students)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Teachers table
CREATE TABLE IF NOT EXISTS teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Parents table
CREATE TABLE IF NOT EXISTS parents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    students INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Classes table
CREATE TABLE IF NOT EXISTS classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    teacher VARCHAR(100) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Assignments table
CREATE TABLE IF NOT EXISTS assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    due_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Resources table
CREATE TABLE IF NOT EXISTS resources (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    type VARCHAR(50) NOT NULL,
    link TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Live Classes table
CREATE TABLE IF NOT EXISTS live_classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    date DATE NOT NULL,
    time TIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Feedback table
CREATE TABLE IF NOT EXISTS feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Progress table
CREATE TABLE IF NOT EXISTS progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    score FLOAT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Discussion Forum table
CREATE TABLE IF NOT EXISTS discussion_forum (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Parent-Student Relationship table
CREATE TABLE IF NOT EXISTS parent_student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    parent_id INT NOT NULL,
    student_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (parent_id) REFERENCES parents(id) ON DELETE CASCADE,
    FOREIGN KEY (student_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Engagement Tracking table
CREATE TABLE IF NOT EXISTS engagement_tracking (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    no_of_hours FLOAT NOT NULL,
    day DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Contact Messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
-- Sample Users (Students)
INSERT INTO users (name, password, status) VALUES
('John Doe', 'password123', 'active'),
('Jane Smith', 'password123', 'active'),
('Mike Johnson', 'password123', 'inactive');

-- Sample Teachers
INSERT INTO teachers (name, password) VALUES
('Prof. Anderson', 'teacher123'),
('Dr. Williams', 'teacher123'),
('Mrs. Thompson', 'teacher123');

-- Sample Parents
INSERT INTO parents (name, password) VALUES
('Mr. Doe', 'parent123'),
('Mrs. Smith', 'parent123'),
('Mr. Johnson', 'parent123');

-- Sample Courses
INSERT INTO courses (name, description, students) VALUES
('Introduction to Mathematics', 'Learn the fundamentals of mathematics including algebra, geometry, and calculus.', 42),
('Advanced Physics', 'Explore the laws of physics, mechanics, and thermodynamics with practical experiments.', 28),
('English Literature', 'Study classic and contemporary literature, poetry, and drama from around the world.', 35),
('Computer Science Fundamentals', 'Introduction to programming, algorithms, and data structures.', 50),
('World History', 'Explore major historical events and their impact on modern society.', 32);

-- Sample Assignments
INSERT INTO assignments (course_id, title, description, due_date) VALUES
(1, 'Algebra Problem Set', 'Complete problems 1-20 in Chapter 3 of the textbook.', DATE_ADD(CURRENT_DATE, INTERVAL 7 DAY)),
(2, 'Physics Lab Report', 'Write a detailed report on the pendulum experiment conducted in class.', DATE_ADD(CURRENT_DATE, INTERVAL 3 DAY)),
(3, 'Literary Analysis Essay', 'Write a 1000-word analysis of the themes in "To Kill a Mockingbird".', DATE_ADD(CURRENT_DATE, INTERVAL 10 DAY)),
(4, 'Programming Assignment', 'Implement a sorting algorithm in the programming language of your choice.', DATE_ADD(CURRENT_DATE, INTERVAL -2 DAY));

-- Sample Live Classes
INSERT INTO live_classes (course_id, title, description, date, time) VALUES
(1, 'Algebra Fundamentals', 'Live session covering the basics of algebraic equations and problem-solving techniques.', CURRENT_DATE, '10:00:00'),
(2, 'Newton\'s Laws of Motion', 'Interactive session on Newton\'s three laws of motion with practical demonstrations.', DATE_ADD(CURRENT_DATE, INTERVAL 2 DAY), '14:00:00'),
(3, 'Shakespeare\'s Sonnets', 'Analysis and discussion of selected sonnets by William Shakespeare.', DATE_ADD(CURRENT_DATE, INTERVAL 5 DAY), '13:30:00'),
(4, 'Introduction to Algorithms', 'Overview of algorithm complexity and common algorithmic patterns.', DATE_ADD(CURRENT_DATE, INTERVAL 1 DAY), '11:00:00');

-- Sample Parent-Student Relationships
INSERT INTO parent_student (parent_id, student_id) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Sample Progress Records
INSERT INTO progress (user_id, course_id, score) VALUES
(1, 1, 85.5),
(1, 2, 78.0),
(2, 1, 92.0),
(2, 3, 88.5),
(3, 4, 45.0);

-- Sample Feedback
INSERT INTO feedback (user_id, message) VALUES
(1, 'Great explanation of the quadratic formula!'),
(2, 'Could we have more practice problems?');

-- Sample Engagement Tracking
INSERT INTO engagement_tracking (user_id, no_of_hours, day) VALUES
(1, 3.5, CURRENT_DATE),
(2, 2.0, CURRENT_DATE),
(3, 1.5, CURRENT_DATE);
