import React, { useState } from "react";
import { Typography, Card, CardContent, Grid, Paper, Switch, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import "./ParentDashboard.css";

const ParentDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openAlertDialog, setOpenAlertDialog] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Mock data for meetings (upcoming events)
  const meetings = [
    { id: 1, title: "Meeting with Mr. Peiris", start: "2024-12-25T10:00:00", end: "2024-12-25T11:00:00" },
    { id: 2, title: "Meeting with Ms. Jayasuriya", start: "2024-12-28T11:00:00", end: "2024-12-28T12:00:00" },
  ];

  // Mock data for student performance
  const studentPerformance = [
    { subject: "Mathematics", grade: "A", progress: 85 },
    { subject: "Science", grade: "B", progress: 70 },
    { subject: "English", grade: "A", progress: 90 },
  ];

  // Mock data for performance chart
  const performanceData = [
    { month: "Jan", score: 60 },
    { month: "Feb", score: 75 },
    { month: "Mar", score: 80 },
    { month: "Apr", score: 85 },
    { month: "May", score: 90 },
  ];

  // Mock data for engagement tracking
  const engagementData = [
    { day: "Mon", logins: 3, studyTime: 120, forumActivity: 5 },
    { day: "Tue", logins: 2, studyTime: 90, forumActivity: 3 },
    { day: "Wed", logins: 4, studyTime: 150, forumActivity: 7 },
    { day: "Thu", logins: 3, studyTime: 100, forumActivity: 4 },
    { day: "Fri", logins: 5, studyTime: 180, forumActivity: 8 },
  ];

  // Mock data for personalized alerts
  const alerts = [
    { id: 1, message: "Your child may need extra help in Mathematics." },
    { id: 2, message: "Low participation in Science forum discussions." },
  ];

  // Open alert dialog
  const handleOpenAlertDialog = (message) => {
    setAlertMessage(message);
    setOpenAlertDialog(true);
  };

  // Close alert dialog
  const handleCloseAlertDialog = () => {
    setOpenAlertDialog(false);
    setAlertMessage("");
  };

  return (
    <div className={`dashboard ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <Typography variant="h4">Welcome Parent!</Typography>
        <div className="dark-mode-toggle">
          <WiDaySunny />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <WiNightClear />
        </div>
      </header>

      <Grid container spacing={3}>
        {/* Student Performance Chart Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Student Performance Over Time
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Student Performance Cards Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Student Performance by Subject
              </Typography>
              <Grid container spacing={2}>
                {studentPerformance.map((subject, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper className="subject-card">
                      <Typography variant="h6">{subject.subject}</Typography>
                      <Typography>Grade: {subject.grade}</Typography>
                      <Typography>Progress: {subject.progress}%</Typography>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Engagement Tracking Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Engagement Tracking
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="logins" fill="#36A2EB" name="Logins" />
                  <Bar dataKey="studyTime" fill="#FF6384" name="Study Time (mins)" />
                  <Bar dataKey="forumActivity" fill="#FFCE56" name="Forum Activity" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Personalized Alerts Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personalized Alerts
              </Typography>
              <ul className="alert-list">
                {alerts.map((alert) => (
                  <li key={alert.id}>
                    <Typography>{alert.message}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOpenAlertDialog(alert.message)}
                    >
                      View Details
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Grid>

        {/* Calendar Section (Upcoming Meetings) */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Meetings
              </Typography>
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={meetings}
                height="auto"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Alert Dialog */}
      <Dialog open={openAlertDialog} onClose={handleCloseAlertDialog}>
        <DialogTitle>Alert Details</DialogTitle>
        <DialogContent>
          <Typography>{alertMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAlertDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ParentDashboard;