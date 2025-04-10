import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import "./TeacherDashboard.css";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TeacherDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);
  const [openCreateCourseDialog, setOpenCreateCourseDialog] = useState(false);
  const [openCreateAssignmentDialog, setOpenCreateAssignmentDialog] = useState(false);
  const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false);
  const [openLiveClassDialog, setOpenLiveClassDialog] = useState(false);
  const [openResourceUploadDialog, setOpenResourceUploadDialog] = useState(false);
  const [openDiscussionModerationDialog, setOpenDiscussionModerationDialog] = useState(false);
  const [openReplyDialog, setOpenReplyDialog] = useState(false);
  const [selectedForum, setSelectedForum] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [replyContent, setReplyContent] = useState("");
  const [messages, setMessages] = useState([]); // For real-time communication
  const [newMessage, setNewMessage] = useState(""); // For chat input

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    if (savedDarkMode) {
      setDarkMode(true);
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, []);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark-mode", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  // Mock data for notifications
  const [notifications] = useState([
    { id: 1, message: "New Math assignment posted.", details: "Complete Chapter 5 exercises by next week." },
    { id: 2, message: "Science exam scheduled for next week.", details: "Prepare for the exam on December 28th." },
  ]);

  // Mock data for student performance
  const studentPerformanceData = [
    { name: "Nimal Siripala", score: 80 },
    { name: "Kamal Perera", score: 70 },
    { name: "Saman Silva", score: 90 },
  ];

  // Chart data for student performance
  const barChartData = {
    labels: studentPerformanceData.map((student) => student.name),
    datasets: [
      {
        label: "Student Scores",
        data: studentPerformanceData.map((student) => student.score),
        backgroundColor: ["#0f3460", "#1a5dad", "#10b981"],
      },
    ],
  };

  // State for courses, assignments, live classes, resources, and feedback
  const [courses, setCourses] = useState([
    { id: 1, name: "Advanced Mathematics", students: 30, description: "A course on advanced mathematical concepts." },
    { id: 2, name: "Introduction to Science", students: 25, description: "Basic principles of science." },
    { id: 3, name: "English Literature", students: 20, description: "Exploring classic and modern literature." },
  ]);

  const [assignments, setAssignments] = useState([
    { id: 1, title: "Math Assignment", due: "2024-12-25", description: "Complete Chapter 5 exercises." },
    { id: 2, title: "Science Project", due: "2024-12-28", description: "Prepare a project on renewable energy." },
  ]);

  const [liveClasses, setLiveClasses] = useState([
    { id: 1, title: "Math Live Session", date: "2024-12-25", time: "10:00 AM", description: "Live session on calculus." },
    { id: 2, title: "Science Live Session", date: "2024-12-28", time: "11:00 AM", description: "Live session on physics." },
  ]);

  const [resources, setResources] = useState([
    { id: 1, title: "Math Notes", type: "PDF", link: "https://example.com/math-notes" },
    { id: 2, title: "Science Past Papers", type: "PDF", link: "https://example.com/science-papers" },
    { id: 3, title: "English Lecture Slides", type: "PPT", link: "https://example.com/english-slides" },
  ]);

  const [feedbackList, setFeedbackList] = useState([
    { id: 1, student: "Nimal Siripala", message: "The course content is very helpful.", response: "" },
    { id: 2, student: "Kamal Perera", message: "Can we have more examples in the lectures?", response: "" },
  ]);

  const [discussionForums, setDiscussionForums] = useState([
    { id: 1, topic: "Math Homework Help", posts: 12, locked: false, expanded: false, children: [
      { id: 1, author: "Student1", timestamp: "2023-12-20 14:30", content: "I need help with calculus", replies: 2 },
      { id: 2, author: "Student2", timestamp: "2023-12-21 09:15", content: "How do I solve quadratic equations?", replies: 0 }
    ] },
    { id: 2, topic: "Science Project Discussion", posts: 8, locked: false, expanded: false, children: [
      { id: 1, author: "Student3", timestamp: "2023-12-19 16:45", content: "Ideas for renewable energy project?", replies: 1 }
    ] },
    { id: 3, topic: "English Essay Tips", posts: 15, locked: false, expanded: false, children: [
      { id: 1, author: "Student4", timestamp: "2023-12-18 11:20", content: "How to structure an analytical essay?", replies: 3 }
    ] },
  ]);

  // Form states
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [assignmentTitle, setAssignmentTitle] = useState("");
  const [assignmentDescription, setAssignmentDescription] = useState("");
  const [assignmentDueDate, setAssignmentDueDate] = useState("");
  const [feedback, setFeedback] = useState("");
  const [liveClassTitle, setLiveClassTitle] = useState("");
  const [liveClassDescription, setLiveClassDescription] = useState("");
  const [liveClassDate, setLiveClassDate] = useState("");
  const [liveClassTime, setLiveClassTime] = useState("");
  const [resourceTitle, setResourceTitle] = useState("");
  const [resourceType, setResourceType] = useState("PDF");
  const [resourceLink, setResourceLink] = useState("");
  const [newDiscussionTopic, setNewDiscussionTopic] = useState("");

  // Handle notification click
  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
    setOpenNotificationDialog(true);
  };

  // Close notification dialog
  const handleCloseNotificationDialog = () => {
    setOpenNotificationDialog(false);
  };

  // Handle create course
  const handleCreateCourse = () => {
    const newCourse = {
      id: courses.length + 1,
      name: courseName,
      description: courseDescription,
      students: 0,
    };
    setCourses([...courses, newCourse]);
    setCourseName("");
    setCourseDescription("");
    setOpenCreateCourseDialog(false);
  };

  // Handle create assignment
  const handleCreateAssignment = () => {
    const newAssignment = {
      id: assignments.length + 1,
      title: assignmentTitle,
      description: assignmentDescription,
      due: assignmentDueDate,
    };
    setAssignments([...assignments, newAssignment]);
    setAssignmentTitle("");
    setAssignmentDescription("");
    setAssignmentDueDate("");
    setOpenCreateAssignmentDialog(false);
  };

  // Handle submit feedback
  const handleSubmitFeedback = () => {
    const newFeedback = {
      id: feedbackList.length + 1,
      student: "Anonymous",
      message: feedback,
      response: "",
    };
    setFeedbackList([...feedbackList, newFeedback]);
    setFeedback("");
    setOpenFeedbackDialog(false);
  };

  // Handle schedule live class
  const handleScheduleLiveClass = () => {
    const newLiveClass = {
      id: liveClasses.length + 1,
      title: liveClassTitle,
      description: liveClassDescription,
      date: liveClassDate,
      time: liveClassTime,
    };
    setLiveClasses([...liveClasses, newLiveClass]);
    setLiveClassTitle("");
    setLiveClassDescription("");
    setLiveClassDate("");
    setLiveClassTime("");
    setOpenLiveClassDialog(false);
  };

  // Handle upload resource
  const handleUploadResource = () => {
    const newResource = {
      id: resources.length + 1,
      title: resourceTitle,
      type: resourceType,
      link: resourceLink,
    };
    setResources([...resources, newResource]);
    setResourceTitle("");
    setResourceType("PDF");
    setResourceLink("");
    setOpenResourceUploadDialog(false);
  };

  // Handle discussion forum moderation
  const handleLockForum = (forumId) => {
    const updatedForums = discussionForums.map((forum) =>
      forum.id === forumId ? { ...forum, locked: !forum.locked } : forum
    );
    setDiscussionForums(updatedForums);
  };

  const handleDeleteForum = (forumId) => {
    const updatedForums = discussionForums.filter((forum) => forum.id !== forumId);
    setDiscussionForums(updatedForums);
  };

  // Handle new discussion topic
  const handleCreateDiscussionTopic = () => {
    const newTopic = {
      id: discussionForums.length + 1,
      topic: newDiscussionTopic,
      posts: 0,
      locked: false,
      expanded: false,
      children: []
    };
    setDiscussionForums([...discussionForums, newTopic]);
    setNewDiscussionTopic("");
  };

  // Toggle forum expansion
  const toggleForumExpansion = (forumId) => {
    const updatedForums = discussionForums.map((forum) =>
      forum.id === forumId ? { ...forum, expanded: !forum.expanded } : forum
    );
    setDiscussionForums(updatedForums);
  };

  // Handle opening reply dialog
  const handleOpenReplyDialog = (forum, post) => {
    setSelectedForum(forum);
    setSelectedPost(post);
    setReplyContent("");
    setOpenReplyDialog(true);
  };

  // Handle submitting a reply
  const handleSubmitReply = () => {
    if (replyContent.trim()) {
      // Update the reply count for the post
      const updatedForums = discussionForums.map((forum) => {
        if (forum.id === selectedForum.id) {
          const updatedChildren = forum.children.map((post) => {
            if (post.id === selectedPost.id) {
              return { ...post, replies: post.replies + 1 };
            }
            return post;
          });
          return { ...forum, posts: forum.posts + 1, children: updatedChildren };
        }
        return forum;
      });
      
      setDiscussionForums(updatedForums);
      setReplyContent("");
      setOpenReplyDialog(false);
    }
  };

  // Handle real-time communication
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: newMessage, sender: "Teacher" }]);
      setNewMessage("");
    }
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <h1 style={{ fontSize: "3rem", fontWeight: "bold", textAlign: "center" }}>
          Welcome Teacher!
        </h1>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          <span>☀️</span>
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <span>🌙</span>
        </div>
      </header>

      <div className="grid-container">
        {/* Notifications Panel */}
        <div className="card">
          <div className="card-content">
            <h2>Notifications</h2>
            <ul className="list">
              {notifications.map((notification) => (
                <li key={notification.id} className="notification-item" onClick={() => handleNotificationClick(notification)}>
                  {notification.message}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Student Performance Chart */}
        <div className="card">
          <div className="card-content">
            <h2>Student Performance</h2>
            <div className="chart-container">
              <Bar data={barChartData} options={{ responsive: true }} />
            </div>
          </div>
        </div>

        {/* Real-Time Communication */}
        <div className="card">
          <div className="card-content">
            <h2>Real-Time Communication</h2>
            <div className="chat-container">
              <div className="chat-messages">
                {messages.map((message) => (
                  <div key={message.id} className={`message ${message.sender === "Teacher" ? "sent" : "received"}`}>
                    {message.text}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Courses</h2>
            <button className="btn primary" onClick={() => setOpenCreateCourseDialog(true)}>
              Create New Course
            </button>
            <div className="grid-3">
              {courses.map((course) => (
                <div key={course.id} className="item-card">
                  <h3>{course.name}</h3>
                  <p>{course.description}</p>
                  <p>Students: {course.students}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Assignments Section */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Assignments</h2>
            <button className="btn primary" onClick={() => setOpenCreateAssignmentDialog(true)}>
              Create New Assignment
            </button>
            <div className="grid-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="item-card">
                  <h3>{assignment.title}</h3>
                  <p>{assignment.description}</p>
                  <p>Due: {assignment.due}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="card">
          <div className="card-content">
            <h2>Resources</h2>
            <button className="btn primary" onClick={() => setOpenResourceUploadDialog(true)}>
              Upload Resource
            </button>
            <ul className="list">
              {resources.map((resource) => (
                <li key={resource.id} className="resource-item">
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    {resource.title} ({resource.type})
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Discussion Forums */}
        <div className="card">
          <div className="card-content">
            <h2>Discussion Forums</h2>
            <button className="btn primary" onClick={() => setOpenDiscussionModerationDialog(true)}>
              Moderate Forums
            </button>
            <div className="forum-controls">
              <input
                type="text"
                value={newDiscussionTopic}
                onChange={(e) => setNewDiscussionTopic(e.target.value)}
                placeholder="New discussion topic"
                className="forum-input"
              />
              <button className="forum-button" onClick={handleCreateDiscussionTopic}>Create Topic</button>
            </div>
            <div className="forum-list">
              {discussionForums.map((forum) => (
                <div key={forum.id} className="forum-container">
                  <div className="forum-row">
                    <div className="forum-info" onClick={() => toggleForumExpansion(forum.id)}>
                      <div className="forum-title">
                        {forum.expanded ? '▼' : '►'} {forum.topic} 
                      </div>
                      <div className="forum-stats">Posts: {forum.posts}</div>
                    </div>
                    <div className="forum-actions">
                      <button className="forum-action-btn" onClick={() => handleLockForum(forum.id)}>
                        {forum.locked ? "🔒" : "✏️"}
                      </button>
                      <button className="forum-action-btn" onClick={() => handleDeleteForum(forum.id)}>
                        🗑️
                      </button>
                    </div>
                  </div>
                  
                  {/* Child posts - only shown when forum is expanded */}
                  {forum.expanded && (
                    <div className="forum-children">
                      {forum.children.map((post) => (
                        <div key={post.id} className="forum-post">
                          <div className="post-header">
                            <div className="post-author">{post.author}</div>
                            <div className="post-time">{post.timestamp}</div>
                          </div>
                          <div className="post-content">{post.content}</div>
                          <div className="post-footer">
                            <span className="post-replies">Replies: {post.replies}</span>
                            <button 
                              className="reply-btn" 
                              onClick={() => handleOpenReplyDialog(forum, post)}
                              disabled={forum.locked}
                            >
                              Reply
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Classes */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Live Classes</h2>
            <button className="btn primary" onClick={() => setOpenLiveClassDialog(true)}>
              Schedule Live Class
            </button>
            <ul className="list">
              {liveClasses.map((liveClass) => (
                <li key={liveClass.id} className="live-class-item">
                  <strong>{liveClass.title}</strong> - Date: {liveClass.date}, Time: {liveClass.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="card full-width">
          <div className="card-content">
            <h2>Feedback</h2>
            <button className="btn primary" onClick={() => setOpenFeedbackDialog(true)}>
              Submit Feedback
            </button>
            <ul className="list">
              {feedbackList.map((feedbackItem) => (
                <li key={feedbackItem.id} className="feedback-item">
                  <strong>{feedbackItem.student}</strong>: {feedbackItem.message}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dialog Components */}
      {openNotificationDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Notification Details</h2>
            </div>
            <div className="dialog-content">
              <p>{selectedNotification?.details}</p>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={handleCloseNotificationDialog}>Close</button>
            </div>
          </div>
        </div>
      )}

      {openCreateCourseDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Create New Course</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="course-name">Course Name</label>
                <input
                  id="course-name"
                  type="text"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="course-description">Course Description</label>
                <textarea
                  id="course-description"
                  value={courseDescription}
                  onChange={(e) => setCourseDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenCreateCourseDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleCreateCourse}>Create</button>
            </div>
          </div>
        </div>
      )}

      {openCreateAssignmentDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Create New Assignment</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="assignment-title">Assignment Title</label>
                <input
                  id="assignment-title"
                  type="text"
                  value={assignmentTitle}
                  onChange={(e) => setAssignmentTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignment-description">Assignment Description</label>
                <textarea
                  id="assignment-description"
                  value={assignmentDescription}
                  onChange={(e) => setAssignmentDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="assignment-due-date">Due Date</label>
                <input
                  id="assignment-due-date"
                  type="date"
                  value={assignmentDueDate}
                  onChange={(e) => setAssignmentDueDate(e.target.value)}
                />
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenCreateAssignmentDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleCreateAssignment}>Create</button>
            </div>
          </div>
        </div>
      )}

      {openFeedbackDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Submit Feedback</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="feedback">Feedback</label>
                <textarea
                  id="feedback"
                  rows="4"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenFeedbackDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleSubmitFeedback}>Submit</button>
            </div>
          </div>
        </div>
      )}

      {openLiveClassDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Schedule Live Class</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="class-title">Class Title</label>
                <input
                  id="class-title"
                  type="text"
                  value={liveClassTitle}
                  onChange={(e) => setLiveClassTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="class-description">Class Description</label>
                <textarea
                  id="class-description"
                  value={liveClassDescription}
                  onChange={(e) => setLiveClassDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="class-date">Date</label>
                <input
                  id="class-date"
                  type="date"
                  value={liveClassDate}
                  onChange={(e) => setLiveClassDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="class-time">Time</label>
                <input
                  id="class-time"
                  type="time"
                  value={liveClassTime}
                  onChange={(e) => setLiveClassTime(e.target.value)}
                />
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenLiveClassDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleScheduleLiveClass}>Schedule</button>
            </div>
          </div>
        </div>
      )}

      {openResourceUploadDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Upload Resource</h2>
            </div>
            <div className="dialog-content">
              <div className="form-group">
                <label htmlFor="resource-title">Resource Title</label>
                <input
                  id="resource-title"
                  type="text"
                  value={resourceTitle}
                  onChange={(e) => setResourceTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="resource-type">Resource Type</label>
                <select
                  id="resource-type"
                  value={resourceType}
                  onChange={(e) => setResourceType(e.target.value)}
                >
                  <option value="PDF">PDF</option>
                  <option value="PPT">PPT</option>
                  <option value="Video">Video</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="resource-link">Resource Link</label>
                <input
                  id="resource-link"
                  type="text"
                  value={resourceLink}
                  onChange={(e) => setResourceLink(e.target.value)}
                />
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenResourceUploadDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleUploadResource}>Upload</button>
            </div>
          </div>
        </div>
      )}

      {/* Discussion Moderation Dialog */}
      {openDiscussionModerationDialog && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Moderate Discussion Forums</h2>
            </div>
            <div className="dialog-content">
              <div className="forum-moderation-list">
                {discussionForums.map((forum) => (
                  <div key={forum.id} className="forum-moderation-row">
                    <div className="forum-moderation-info">
                      <div className="forum-moderation-title">{forum.topic}</div>
                      <div className="forum-moderation-stats">Posts: {forum.posts}</div>
                    </div>
                    <div className="forum-moderation-actions">
                      <button 
                        className="forum-moderation-btn" 
                        onClick={() => handleLockForum(forum.id)}
                      >
                        {forum.locked ? "🔒 Unlock" : "🔒 Lock"}
                      </button>
                      <button 
                        className="forum-moderation-btn delete" 
                        onClick={() => handleDeleteForum(forum.id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenDiscussionModerationDialog(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Reply Dialog */}
      {openReplyDialog && selectedPost && (
        <div className="dialog-overlay">
          <div className="dialog">
            <div className="dialog-header">
              <h2>Reply to Post</h2>
            </div>
            <div className="dialog-content">
              <div className="quoted-post">
                <div className="quoted-author">{selectedPost.author} wrote:</div>
                <div className="quoted-content">{selectedPost.content}</div>
              </div>
              <div className="form-group">
                <label htmlFor="reply-content">Your Reply</label>
                <textarea
                  id="reply-content"
                  rows="4"
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="dialog-actions">
              <button className="btn" onClick={() => setOpenReplyDialog(false)}>Cancel</button>
              <button className="btn primary" onClick={handleSubmitReply}>Submit Reply</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
