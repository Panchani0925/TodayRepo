// 4. Create src/components/StudentDashboard.jsx:
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import "./StudentDashboard.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const StudentDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);

  // Set up dark mode on initial load (from localStorage if available)
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    document.body.classList.toggle("dark-mode", savedDarkMode);
  }, []);

  // Set up responsive behavior
  // Dark mode toggle with localStorage persistence
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  // Chart options with dynamic color based on dark mode
  const getChartOptions = (title) => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "#ffffff" : "#1f2937",
        },
      },
      title: {
        display: true,
        text: title,
        color: darkMode ? "#ffffff" : "#1f2937",
      },
    },
    scales: {
      y: {
        ticks: {
          color: darkMode ? "#e2e8f0" : "#6b7280",
        },
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
      x: {
        ticks: {
          color: darkMode ? "#e2e8f0" : "#6b7280",
        },
        grid: {
          color: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
      },
    },
  });

  // Progress chart data
  const progressChartData = {
    labels: ["Mathematics", "Science", "English", "Chemistry"],
    datasets: [
      {
        label: "Progress (%)",
        data: [80, 70, 90, 60],
        backgroundColor: darkMode
          ? ["rgba(255, 99, 132, 0.8)", "rgba(54, 162, 235, 0.8)", "rgba(255, 206, 86, 0.8)", "rgba(75, 192, 192, 0.8)"]
          : ["rgba(255, 99, 132, 0.7)", "rgba(54, 162, 235, 0.7)", "rgba(255, 206, 86, 0.7)", "rgba(75, 192, 192, 0.7)"],
        borderColor: darkMode
          ? ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 206, 86)", "rgb(75, 192, 192)"]
          : ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 206, 86)", "rgb(75, 192, 192)"],
        borderWidth: 2,
      },
    ],
  };

  // Performance trend data
  const performanceTrendData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Performance Score",
        data: [70, 75, 80, 85, 90],
        borderColor: darkMode ? "rgba(75, 192, 192, 1)" : "rgba(75, 192, 192, 0.8)",
        backgroundColor: darkMode ? "rgba(75, 192, 192, 0.2)" : "rgba(75, 192, 192, 0.1)",
        pointBackgroundColor: darkMode ? "rgba(75, 192, 192, 1)" : "rgba(75, 192, 192, 0.8)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Mock data - with more detailed content
  const deadlines = [
    { 
      id: 1,
      task: "Advanced Mathematics Assignment - Calculus Problem Set", 
      due: "2024-12-15",
      course: "Mathematics",
      priority: "High" 
    },
    { 
      id: 2,
      task: "Science Project - Lab Report on Chemical Reactions", 
      due: "2024-12-18",
      course: "Science",
      priority: "Medium" 
    },
    { 
      id: 3,
      task: "English Literature Essay - Character Analysis", 
      due: "2024-12-22",
      course: "English",
      priority: "Medium" 
    },
  ];

  const notifications = [
    { 
      id: 1, 
      message: "New Mathematics assignment posted", 
      details: "Complete Chapter 5 exercises on calculus by December 15th. The assignment covers differential equations and their applications.",
      date: "2024-12-10",
      course: "Mathematics"
    },
    { 
      id: 2, 
      message: "Science exam scheduled", 
      details: "Prepare for the mid-term science exam on December 18th. Topics include chemical reactions, physics principles, and biology fundamentals.",
      date: "2024-12-08",
      course: "Science"
    },
    { 
      id: 3, 
      message: "English project feedback available", 
      details: "Your recent English literature project has been graded. Check the feedback section for detailed comments from your instructor.",
      date: "2024-12-09",
      course: "English"
    },
  ];

  const enrolledCourses = [
    { 
      id: 1, 
      name: "Advanced Mathematics", 
      instructor: "Dr. Rajapaksa", 
      progress: 80,
      nextClass: "Monday, 10:00 AM",
      recentTopics: "Differential Equations, Calculus" 
    },
    { 
      id: 2, 
      name: "Introduction to Chemistry", 
      instructor: "Ms. Jayasuriya", 
      progress: 70,
      nextClass: "Tuesday, 1:30 PM",
      recentTopics: "Chemical Reactions, Atomic Structure" 
    },
    { 
      id: 3, 
      name: "English Literature", 
      instructor: "Mrs. Abeysiriwardana", 
      progress: 90,
      nextClass: "Wednesday, 9:15 AM",
      recentTopics: "Character Analysis, Modern Poetry" 
    },
    { 
      id: 4, 
      name: "Physics Fundamentals", 
      instructor: "Mr. Perera", 
      progress: 65,
      nextClass: "Thursday, 11:00 AM",
      recentTopics: "Mechanics, Wave Theory" 
    },
  ];

  const studyResources = [
    { id: 1, title: "Mathematics Formula Sheet", type: "PDF", link: "#", size: "1.2 MB", dateAdded: "2024-12-01" },
    { id: 2, title: "Chemistry Lab Manual", type: "PDF", link: "#", size: "3.5 MB", dateAdded: "2024-11-28" },
    { id: 3, title: "English Literature Reading List", type: "DOC", link: "#", size: "0.8 MB", dateAdded: "2024-12-05" },
    { id: 4, title: "Physics Problem Set Solutions", type: "PDF", link: "#", size: "2.1 MB", dateAdded: "2024-12-07" },
  ];

  const discussionForums = [
    { id: 1, topic: "Mathematics Homework Help", posts: 24, lastActive: "Today", participants: 18 },
    { id: 2, topic: "Chemistry Lab Discussion", posts: 16, lastActive: "Yesterday", participants: 12 },
    { id: 3, topic: "Literature Essay Techniques", posts: 32, lastActive: "3 days ago", participants: 22 },
  ];

  const liveClasses = [
    { 
      id: 1, 
      title: "Mathematics Review Session", 
      date: "2024-12-15", 
      time: "10:00 AM", 
      instructor: "Dr. Rajapaksa", 
      duration: "1 hour",
      topics: "Calculus, Differential Equations"
    },
    { 
      id: 2, 
      title: "Chemistry Lab Preparation", 
      date: "2024-12-16", 
      time: "2:00 PM", 
      instructor: "Ms. Jayasuriya", 
      duration: "45 minutes",
      topics: "Chemical Reactions, Safety Protocols"
    },
    { 
      id: 3, 
      title: "English Literature Discussion", 
      date: "2024-12-17", 
      time: "9:30 AM", 
      instructor: "Mrs. Abeysiriwardana", 
      duration: "1 hour",
      topics: "Character Analysis, Modern Poetry"
    },
  ];

  // Calculate days left for deadlines
  const calculateDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };

  // Format dates to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle notification click
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setOpenNotificationDialog(true);
  };

  // Close notification dialog
  const handleCloseNotificationDialog = () => {
    setOpenNotificationDialog(false);
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : ""}`}>
      <header className="dashboard-header">
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Student Dashboard</h1>
        <div className="dark-mode-toggle">
          <span className="sun-icon">☀️</span>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <span className="moon-icon">🌙</span>
        </div>
      </header>

      <div className="dashboard-grid">
        {/* First Row: Notifications and Progress Overview */}
        <div className="dashboard-card">
          <div className="card-content">
            <h2>Notifications</h2>
            <div className="notification-list">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="notification-item"
                  onClick={() => handleNotificationClick(notification)}
                >
                  <h3>{notification.message}</h3>
                  <p>Course: {notification.course} • {notification.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-content">
            <h2>Progress Overview</h2>
            <div className="chart-container">
              <Bar
                data={progressChartData}
                options={getChartOptions("Subject Progress")}
              />
            </div>
          </div>
        </div>

        {/* Second Row: Upcoming Deadlines */}
        <div className="dashboard-card full-width">
          <div className="card-content">
            <h2>Upcoming Deadlines</h2>
            <div className="deadlines-list">
              {deadlines.map((deadline) => {
                const daysLeft = calculateDaysLeft(deadline.due);
                return (
                  <div key={deadline.id} className="deadline-item">
                    <div>
                      <h3>{deadline.task}</h3>
                      <p>Course: {deadline.course} • Due: {formatDate(deadline.due)}</p>
                    </div>
                    <p className={daysLeft <= 3 ? "urgent" : ""}>
                      {daysLeft} days left • {deadline.priority} Priority
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Third Row: Classes Enrolled */}
        <div className="dashboard-card full-width">
          <div className="card-content">
            <h2>Classes Enrolled</h2>
            <div className="courses-grid">
              {enrolledCourses.map((course) => (
                <Link to={`/class/${course.id}`} key={course.id} className="course-link">
                  <div className="course-card">
                    <h3>{course.name}</h3>
                    <p>Instructor: {course.instructor}</p>
                    <div className="course-details">
                      <p>Progress: {course.progress}%</p>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <p>Next Class: {course.nextClass}</p>
                      <p>Recent Topics: {course.recentTopics}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Row: Study Resources and Discussion Forums */}
        <div className="dashboard-card">
          <div className="card-content">
            <h2>Study Resources</h2>
            <div className="resources-list">
              {studyResources.map((resource) => (
                <div key={resource.id} className="resource-item">
                  <div className="resource-icon">{resource.type}</div>
                  <div className="resource-details">
                    <a href={resource.link} target="_blank" rel="noopener noreferrer">
                      {resource.title}
                    </a>
                    <p>{resource.size} • Added {resource.dateAdded}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-content">
            <h2>Discussion Forums</h2>
            <div className="forums-list">
              {discussionForums.map((forum) => (
                <div key={forum.id} className="forum-item">
                  <h3>{forum.topic}</h3>
                  <p>{forum.posts} posts • {forum.participants} participants</p>
                  <p>Last active: {forum.lastActive}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fifth Row: Live Classes */}
        <div className="dashboard-card full-width">
          <div className="card-content">
            <h2>Live Classes</h2>
            <div className="live-classes-list">
              {liveClasses.map((liveClass) => (
                <div key={liveClass.id} className="live-class-item">
                  <div className="live-class-details">
                    <h3>{liveClass.title}</h3>
                    <p>Date: {formatDate(liveClass.date)} • Time: {liveClass.time}</p>
                    <p>Instructor: {liveClass.instructor} • Duration: {liveClass.duration}</p>
                    <p>Topics: {liveClass.topics}</p>
                  </div>
                  <button className="join-button">Join Class</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sixth Row: Performance Analytics */}
        <div className="dashboard-card full-width">
          <div className="card-content">
            <h2>Performance Analytics</h2>
            <div className="chart-container">
              <Line
                data={performanceTrendData}
                options={getChartOptions("Weekly Performance Trend")}
              />
            </div>
          </div>
        </div>

        {/* Seventh Row: Support Section */}
        <div className="dashboard-card full-width">
          <div className="card-content">
            <h2>Support Section</h2>
            <div className="support-content">
              <p>Need help with your studies or technical assistance?</p>
              <p>Our support team is available Monday-Friday, 9:00 AM - 5:00 PM.</p>
              <div className="support-buttons">
                <button className="support-button primary">Contact Academic Advisor</button>
                <button className="support-button secondary">Technical Support</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Dialog */}
      {openNotificationDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Notification Details</h2>
              <button className="close-button" onClick={handleCloseNotificationDialog}>✕</button>
            </div>
            <div className="dialog-content">
              <h3>{selectedNotification?.message}</h3>
              <p>Course: {selectedNotification?.course}</p>
              <p>Date: {selectedNotification?.date}</p>
              <p>{selectedNotification?.details}</p>
            </div>
            <div className="dialog-actions">
              <button onClick={handleCloseNotificationDialog}>Close</button>
              <button className="primary">Mark as Read</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
