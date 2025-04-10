import DownloadIcon from "@mui/icons-material/Download";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Rating,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";
import React, { useState } from "react";
import { Bar, Doughnut, Line, Pie, Radar } from "react-chartjs-2";
import { WiDaySunny, WiNightClear } from "react-icons/wi";
import "./AdminPage.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const AdminPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false);
  const [openEditUserDialog, setOpenEditUserDialog] = useState(false);
  const [openDeleteUserDialog, setOpenDeleteUserDialog] = useState(false);
  const [openAddClassDialog, setOpenAddClassDialog] = useState(false);
  const [openEditClassDialog, setOpenEditClassDialog] = useState(false);
  const [openDeleteClassDialog, setOpenDeleteClassDialog] = useState(false);
  const [openGenerateReportDialog, setOpenGenerateReportDialog] = useState(false);
  const [showReportPreview, setShowReportPreview] = useState(false);
  const [reportType, setReportType] = useState("performance");
  const [reportPeriod, setReportPeriod] = useState("week");
  const [reportFormat, setReportFormat] = useState("pdf");

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [newUserName, setNewUserName] = useState("");
  const [newUserRole, setNewUserRole] = useState("Teacher");
  const [newClassName, setNewClassName] = useState("");
  const [newClassTeacher, setNewClassTeacher] = useState("");
  const [newClassSubject, setNewClassSubject] = useState("");

  const [users, setUsers] = useState([
    { id: 1, name: "Hasitha Madusanka", role: "Teacher", status: "Active" },
    { id: 2, name: "Nilantha Jayasuriya", role: "Teacher", status: "Active" },
    { id: 3, name: "Nimal Siripala", role: "Student", status: "Active" },
    { id: 4, name: "Kamal Perera", role: "Parent", status: "Inactive" },
  ]);

  const [classes, setClasses] = useState([
    { id: 1, name: "Mathematics", teacher: "Hasitha Madusanka", subject: "Advanced Math" },
    { id: 2, name: "Science", teacher: "Nilantha Jayasuriya", subject: "Physics" },
  ]);

  const [platformUsage] = useState([
    { id: 1, user: "Hasitha Madusanka", logins: 12, resourcesAccessed: 5, engagement: "High" },
    { id: 2, user: "Nilantha Jayasuriya", logins: 8, resourcesAccessed: 3, engagement: "Medium" },
    { id: 3, user: "Nimal Siripala", logins: 15, resourcesAccessed: 7, engagement: "High" },
  ]);

  const [securitySettings, setSecuritySettings] = useState({
    dataPermissions: "Restricted",
    compliance: "GDPR Compliant",
  });

  // Mock data for reports
  const performanceChartData = {
    labels: ["Math", "Science", "English", "History"],
    datasets: [
      {
        label: "Average Score",
        data: [85, 78, 92, 88],
        backgroundColor: "#36A2EB",
      },
    ],
  };

  const performanceData = [
    { id: 1, subject: "Math", averageScore: 85, passRate: 90, topPerformer: "Nimal Siripala" },
    { id: 2, subject: "Science", averageScore: 78, passRate: 85, topPerformer: "Kamal Perera" },
  ];

  const attendanceChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Attendance Rate",
        data: [95, 90, 92, 94],
        borderColor: "#FF6384",
        fill: false,
      },
    ],
  };

  const attendanceData = [
    { month: "Jan", attendance: 95 },
    { month: "Feb", attendance: 90 },
  ];

  const academicTrendData = {
    labels: ["Grade 6", "Grade 7", "Grade 8", "Grade 9"],
    datasets: [
      {
        label: "Average Score",
        data: [80, 85, 88, 90],
        backgroundColor: "#FFCE56",
      },
    ],
  };

  const enrollmentData = {
    labels: ["Grade 6", "Grade 7", "Grade 8", "Grade 9"],
    datasets: [
      {
        label: "Enrollment",
        data: [120, 110, 100, 90],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  const keyMetricsData = [
    { id: 1, category: "Attendance", currentValue: 92, previousValue: 90, change: 2, status: "Excellent" },
    { id: 2, category: "Performance", currentValue: 85, previousValue: 80, change: 5, status: "Good" },
  ];

  const teacherPerformanceData = {
    labels: ["Teaching", "Engagement", "Feedback", "Results"],
    datasets: [
      {
        label: "Hasitha Madusanka",
        data: [4.5, 4.2, 4.7, 4.8],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "#FF6384",
      },
    ],
  };

  const teacherData = [
    { id: 1, name: "Hasitha Madusanka", department: "Math", satisfaction: 4.5, classAverage: 85, rating: 4.7 },
  ];

  const studentProgressData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Grade Progression",
        data: [80, 82, 85, 88],
        borderColor: "#36A2EB",
        fill: false,
      },
    ],
  };

  const studentCategoryData = {
    labels: ["Above Average", "Average", "Below Average"],
    datasets: [
      {
        label: "Students",
        data: [30, 50, 20],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  const studentGradeLevelData = [
    { id: 1, level: "Grade 6", aboveAverage: 30, average: 50, belowAverage: 20, improvementRate: 5 },
  ];

  // Define platformUsageData
  const platformUsageData = {
    labels: platformUsage.map((usage) => usage.user),
    datasets: [
      {
        label: "Logins",
        data: platformUsage.map((usage) => usage.logins),
        backgroundColor: "#36A2EB",
      },
      {
        label: "Resources Accessed",
        data: platformUsage.map((usage) => usage.resourcesAccessed),
        backgroundColor: "#FF6384",
      },
    ],
  };

  // Define userRolesData
  const userRolesData = {
    labels: ["Teacher", "Student", "Parent"],
    datasets: [
      {
        label: "User Roles",
        data: [
          users.filter((user) => user.role === "Teacher").length,
          users.filter((user) => user.role === "Student").length,
          users.filter((user) => user.role === "Parent").length,
        ],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
      },
    ],
  };

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Open add user dialog
  const handleOpenAddUserDialog = () => {
    setOpenAddUserDialog(true);
  };

  // Close add user dialog
  const handleCloseAddUserDialog = () => {
    setOpenAddUserDialog(false);
    setNewUserName("");
    setNewUserRole("Teacher");
  };

  // Add a new user
  const handleAddUser = () => {
    const newUser = {
      id: users.length + 1,
      name: newUserName,
      role: newUserRole,
      status: "Active",
    };
    setUsers([...users, newUser]);
    handleCloseAddUserDialog();
  };

  // Open edit user dialog
  const handleOpenEditUserDialog = (user) => {
    setSelectedUser(user);
    setOpenEditUserDialog(true);
  };

  // Close edit user dialog
  const handleCloseEditUserDialog = () => {
    setOpenEditUserDialog(false);
    setSelectedUser(null);
  };

  // Update user details
  const handleUpdateUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === selectedUser.id ? { ...user, name: selectedUser.name, role: selectedUser.role } : user
    );
    setUsers(updatedUsers);
    handleCloseEditUserDialog();
  };

  // Open delete user dialog
  const handleOpenDeleteUserDialog = (user) => {
    setSelectedUser(user);
    setOpenDeleteUserDialog(true);
  };

  // Close delete user dialog
  const handleCloseDeleteUserDialog = () => {
    setOpenDeleteUserDialog(false);
    setSelectedUser(null);
  };

  // Delete a user
  const handleDeleteUser = () => {
    const updatedUsers = users.filter((user) => user.id !== selectedUser.id);
    setUsers(updatedUsers);
    handleCloseDeleteUserDialog();
  };

  // Toggle user status (Active/Inactive)
  const toggleUserStatus = (userId) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user
    );
    setUsers(updatedUsers);
  };

  // Open add class dialog
  const handleOpenAddClassDialog = () => {
    setOpenAddClassDialog(true);
  };

  // Close add class dialog
  const handleCloseAddClassDialog = () => {
    setOpenAddClassDialog(false);
    setNewClassName("");
    setNewClassTeacher("");
    setNewClassSubject("");
  };

  // Add a new class
  const handleAddClass = () => {
    const newClass = {
      id: classes.length + 1,
      name: newClassName,
      teacher: newClassTeacher,
      subject: newClassSubject,
    };
    setClasses([...classes, newClass]);
    handleCloseAddClassDialog();
  };

  // Open edit class dialog
  const handleOpenEditClassDialog = (classItem) => {
    setSelectedClass(classItem);
    setOpenEditClassDialog(true);
  };

  // Close edit class dialog
  const handleCloseEditClassDialog = () => {
    setOpenEditClassDialog(false);
    setSelectedClass(null);
  };

  // Update class details
  const handleUpdateClass = () => {
    const updatedClasses = classes.map((classItem) =>
      classItem.id === selectedClass.id
        ? { ...classItem, name: selectedClass.name, teacher: selectedClass.teacher, subject: selectedClass.subject }
        : classItem
    );
    setClasses(updatedClasses);
    handleCloseEditClassDialog();
  };

  // Open delete class dialog
  const handleOpenDeleteClassDialog = (classItem) => {
    setSelectedClass(classItem);
    setOpenDeleteClassDialog(true);
  };

  // Close delete class dialog
  const handleCloseDeleteClassDialog = () => {
    setOpenDeleteClassDialog(false);
    setSelectedClass(null);
  };

  // Delete a class
  const handleDeleteClass = () => {
    const updatedClasses = classes.filter((classItem) => classItem.id !== selectedClass.id);
    setClasses(updatedClasses);
    handleCloseDeleteClassDialog();
  };

  // Open generate report dialog
  const handleOpenGenerateReportDialog = () => {
    setOpenGenerateReportDialog(true);
  };

  // Close generate report dialog
  const handleCloseGenerateReportDialog = () => {
    setOpenGenerateReportDialog(false);
    setShowReportPreview(false);
  };

  // Handle generate report
  const handleGenerateReport = () => {
    console.log("Generating report...");
    // Logic to generate the report
  };

  // Handle download report
  const handleDownloadReport = () => {
    console.log("Downloading report...");
    // Logic to download the report
  };

  return (
    <div className={`admin-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <header>
        <Typography variant="h4">Admin Dashboard</Typography>
        <div className="dark-mode-toggle">
          <WiDaySunny />
          <Switch checked={darkMode} onChange={toggleDarkMode} />
          <WiNightClear />
        </div>
      </header>

      <Grid container spacing={3}>
        {/* User Management */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Management</Typography>
              <Button variant="contained" onClick={handleOpenAddUserDialog}>
                Add New User
              </Button>
              <TableContainer component={Paper} style={{ marginTop: "10px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Role</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>
                          <Switch
                            checked={user.status === "Active"}
                            onChange={() => toggleUserStatus(user.id)}
                          />
                          {user.status}
                        </TableCell>
                        <TableCell>
                          <Button onClick={() => handleOpenEditUserDialog(user)}>Edit</Button>
                          <Button onClick={() => handleOpenDeleteUserDialog(user)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Class Management */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Class Management</Typography>
              <Button variant="contained" onClick={handleOpenAddClassDialog}>
                Add New Class
              </Button>
              <TableContainer component={Paper} style={{ marginTop: "10px" }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Class Name</TableCell>
                      <TableCell>Teacher</TableCell>
                      <TableCell>Subject</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {classes.map((classItem) => (
                      <TableRow key={classItem.id}>
                        <TableCell>{classItem.name}</TableCell>
                        <TableCell>{classItem.teacher}</TableCell>
                        <TableCell>{classItem.subject}</TableCell>
                        <TableCell>
                          <Button onClick={() => handleOpenEditClassDialog(classItem)}>Edit</Button>
                          <Button onClick={() => handleOpenDeleteClassDialog(classItem)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Generate Report */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Generate Report</Typography>
              <Button variant="contained" color="primary" onClick={handleOpenGenerateReportDialog}>
                Generate School Performance Report
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Platform Usage */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Platform Usage</Typography>
              <Bar
                data={platformUsageData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "User Engagement",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* User Roles Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Roles</Typography>
              <Pie
                data={userRolesData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "User Roles Distribution",
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Security & Privacy Controls */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Security & Privacy Controls</Typography>
              <FormControl fullWidth style={{ marginBottom: "10px" }}>
                <InputLabel>Data Permissions</InputLabel>
                <Select
                  value={securitySettings.dataPermissions}
                  onChange={(e) =>
                    setSecuritySettings({ ...securitySettings, dataPermissions: e.target.value })
                  }
                >
                  <MenuItem value="Restricted">Restricted</MenuItem>
                  <MenuItem value="Limited">Limited</MenuItem>
                  <MenuItem value="Full Access">Full Access</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel>Compliance</InputLabel>
                <Select
                  value={securitySettings.compliance}
                  onChange={(e) =>
                    setSecuritySettings({ ...securitySettings, compliance: e.target.value })
                  }
                >
                  <MenuItem value="GDPR Compliant">GDPR Compliant</MenuItem>
                  <MenuItem value="FERPA Compliant">FERPA Compliant</MenuItem>
                  <MenuItem value="HIPAA Compliant">HIPAA Compliant</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Add User Dialog */}
      <Dialog open={openAddUserDialog} onClose={handleCloseAddUserDialog}>
        <DialogTitle>Add New User</DialogTitle>
        <DialogContent>
          <TextField
            label="User Name"
            fullWidth
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
              value={newUserRole}
              onChange={(e) => setNewUserRole(e.target.value)}
            >
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Parent">Parent</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddUserDialog}>Cancel</Button>
          <Button onClick={handleAddUser}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={openEditUserDialog} onClose={handleCloseEditUserDialog}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            label="User Name"
            fullWidth
            value={selectedUser?.name || ""}
            onChange={(e) => setSelectedUser(prev => ({ ...prev, name: e.target.value }))}
            style={{ marginBottom: "10px" }}
          />
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Select
              value={selectedUser?.role || ""}
              onChange={(e) => setSelectedUser(prev => ({ ...prev, role: e.target.value }))}
            >
              <MenuItem value="Teacher">Teacher</MenuItem>
              <MenuItem value="Student">Student</MenuItem>
              <MenuItem value="Parent">Parent</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditUserDialog}>Cancel</Button>
          <Button onClick={handleUpdateUser}>Update</Button>
        </DialogActions>
      </Dialog>

      {/* Delete User Dialog */}
      <Dialog open={openDeleteUserDialog} onClose={handleCloseDeleteUserDialog}>
        <DialogTitle>Delete User</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete {selectedUser?.name}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteUserDialog}>Cancel</Button>
          <Button onClick={handleDeleteUser}>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Add Class Dialog */}
      <Dialog open={openAddClassDialog} onClose={handleCloseAddClassDialog}>
        <DialogTitle>Add New Class</DialogTitle>
        <DialogContent>
          <TextField
            label="Class Name"
            fullWidth
            value={newClassName}
            onChange={(e) => setNewClassName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Teacher"
            fullWidth
            value={newClassTeacher}
            onChange={(e) => setNewClassTeacher(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Subject"
            fullWidth
            value={newClassSubject}
            onChange={(e) => setNewClassSubject(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddClassDialog}>Cancel</Button>
          <Button onClick={handleAddClass}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Class Dialog */}
      <Dialog open={openEditClassDialog} onClose={handleCloseEditClassDialog}>
        <DialogTitle>Edit Class</DialogTitle>
        <DialogContent>
          <TextField
            label="Class Name"
            fullWidth
            value={selectedClass?.name || ""}
            onChange={(e) => setSelectedClass(prev => ({ ...prev, name: e.target.value }))}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Teacher"
            fullWidth
            value={selectedClass?.teacher || ""}
            onChange={(e) => setSelectedClass(prev => ({ ...prev, teacher: e.target.value }))}
            style={{ marginBottom: "10px" }}
          />
          <TextField
            label="Subject"
            fullWidth
            value={selectedClass?.subject || ""}
            onChange={(e) => setSelectedClass(prev => ({ ...prev, subject: e.target.value }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditClassDialog}>Cancel</Button>
          <Button onClick={handleUpdateClass}>Update</Button>
        </DialogActions>
      </Dialog>

      {/* Delete Class Dialog */}
      <Dialog open={openDeleteClassDialog} onClose={handleCloseDeleteClassDialog}>
        <DialogTitle>Delete Class</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete {selectedClass?.name}?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteClassDialog}>Cancel</Button>
          <Button onClick={handleDeleteClass}>Delete</Button>
        </DialogActions>
      </Dialog>

      {/* Generate Report Dialog */}
      <Dialog open={openGenerateReportDialog} onClose={handleCloseGenerateReportDialog} maxWidth="md" fullWidth>
        <DialogTitle>Generate School Performance Report</DialogTitle>
        <DialogContent>
          {!showReportPreview ? (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth style={{ marginBottom: "10px" }}>
                  <InputLabel>Report Type</InputLabel>
                  <Select
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                  >
                    <MenuItem value="performance">Academic Performance</MenuItem>
                    <MenuItem value="attendance">Attendance Report</MenuItem>
                    <MenuItem value="comprehensive">Comprehensive School Report</MenuItem>
                    <MenuItem value="teacher">Teacher Performance</MenuItem>
                    <MenuItem value="student">Student Progress</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth style={{ marginBottom: "10px" }}>
                  <InputLabel>Time Period</InputLabel>
                  <Select
                    value={reportPeriod}
                    onChange={(e) => setReportPeriod(e.target.value)}
                  >
                    <MenuItem value="week">Last Week</MenuItem>
                    <MenuItem value="month">Last Month</MenuItem>
                    <MenuItem value="quarter">Last Quarter</MenuItem>
                    <MenuItem value="year">Last Year</MenuItem>
                    <MenuItem value="custom">Custom Range</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth style={{ marginBottom: "10px" }}>
                  <InputLabel>Report Format</InputLabel>
                  <Select
                    value={reportFormat}
                    onChange={(e) => setReportFormat(e.target.value)}
                  >
                    <MenuItem value="pdf">PDF Document</MenuItem>
                    <MenuItem value="excel">Excel Spreadsheet</MenuItem>
                    <MenuItem value="html">HTML Document</MenuItem>
                    <MenuItem value="csv">CSV File</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          ) : (
            <div>
              <Typography variant="h6" style={{ marginBottom: "20px" }}>
                Report Preview: {reportType === "performance" ? "Academic Performance" : reportType === "attendance" ? "Attendance Report" : reportType === "comprehensive" ? "Comprehensive School Report" : reportType === "teacher" ? "Teacher Performance" : "Student Progress"}
              </Typography>
              
              {reportType === "performance" && (
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Academic Performance Overview
                  </Typography>
                  <Bar
                    data={performanceChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Subject Performance Metrics",
                        },
                      },
                    }}
                  />
                  <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Subject</TableCell>
                          <TableCell align="right">Average Score</TableCell>
                          <TableCell align="right">Pass Rate</TableCell>
                          <TableCell>Top Performer</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {performanceData.map((item) => (
                          <TableRow key={item.id}>
                            <TableCell>{item.subject}</TableCell>
                            <TableCell align="right">{item.averageScore}</TableCell>
                            <TableCell align="right">{item.passRate}%</TableCell>
                            <TableCell>{item.topPerformer}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              )}
              
              {reportType === "attendance" && (
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Attendance Analysis
                  </Typography>
                  <Line 
                    data={attendanceChartData}
                    options={{
                      responsive: true,
                      plugins: {
                        legend: {
                          position: "top",
                        },
                        title: {
                          display: true,
                          text: "Monthly Attendance Rate",
                        },
                      },
                    }}
                  />
                  <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Month</TableCell>
                          <TableCell align="right">Attendance Rate (%)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {attendanceData.map((item, index) => (
                          <TableRow key={index}>
                            <TableCell>{item.month}</TableCell>
                            <TableCell align="right">{item.attendance}%</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              )}
              
              {reportType === "comprehensive" && (
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Comprehensive School Performance
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Bar
                        data={academicTrendData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: "top",
                            },
                            title: {
                              display: true,
                              text: "Academic Trends by Grade Level",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Doughnut
                        data={enrollmentData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: "right",
                            },
                            title: {
                              display: true,
                              text: "Enrollment Distribution",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" gutterBottom style={{ marginTop: "20px" }}>
                        Key Metrics Overview
                      </Typography>
                      <TableContainer component={Paper}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Category</TableCell>
                              <TableCell align="right">Current Value</TableCell>
                              <TableCell align="right">Previous Period</TableCell>
                              <TableCell align="right">Change</TableCell>
                              <TableCell>Status</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {keyMetricsData.map((metric) => (
                              <TableRow key={metric.id}>
                                <TableCell>{metric.category}</TableCell>
                                <TableCell align="right">{metric.currentValue}</TableCell>
                                <TableCell align="right">{metric.previousValue}</TableCell>
                                <TableCell align="right" style={{ color: metric.change >= 0 ? 'green' : 'red' }}>
                                  {metric.change >= 0 ? '+' : ''}{metric.change}%
                                </TableCell>
                                <TableCell>
                                  <Chip 
                                    size="small" 
                                    label={metric.status} 
                                    color={
                                      metric.status === "Excellent" ? "success" : 
                                      metric.status === "Good" ? "primary" : 
                                      metric.status === "Average" ? "default" : 
                                      "error"
                                    } 
                                  />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </div>
              )}
              
              {reportType === "teacher" && (
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Teacher Performance Analysis
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Radar
                        data={teacherPerformanceData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: "top",
                            },
                            title: {
                              display: true,
                              text: "Teacher Evaluation Metrics",
                            },
                          },
                          scales: {
                            r: {
                              min: 0,
                              max: 5,
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Teacher</TableCell>
                              <TableCell>Department</TableCell>
                              <TableCell align="right">Student Satisfaction</TableCell>
                              <TableCell align="right">Class Average</TableCell>
                              <TableCell>Performance Rating</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {teacherData.map((teacher) => (
                              <TableRow key={teacher.id}>
                                <TableCell>{teacher.name}</TableCell>
                                <TableCell>{teacher.department}</TableCell>
                                <TableCell align="right">{teacher.satisfaction}/5</TableCell>
                                <TableCell align="right">{teacher.classAverage}</TableCell>
                                <TableCell>
                                  <Rating 
                                    value={teacher.rating} 
                                    readOnly 
                                    precision={0.5} 
                                    size="small"
                                  />
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </div>
              )}
              
              {reportType === "student" && (
                <div>
                  <Typography variant="subtitle1" gutterBottom>
                    Student Progress Analysis
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Line
                        data={studentProgressData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: "top",
                            },
                            title: {
                              display: true,
                              text: "Grade Progression Over Time",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Pie
                        data={studentCategoryData}
                        options={{
                          responsive: true,
                          plugins: {
                            legend: {
                              position: "right",
                            },
                            title: {
                              display: true,
                              text: "Student Performance Categories",
                            },
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Grade Level</TableCell>
                              <TableCell align="right">Above Average (%)</TableCell>
                              <TableCell align="right">Average (%)</TableCell>
                              <TableCell align="right">Below Average (%)</TableCell>
                              <TableCell align="right">Improvement Rate (%)</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {studentGradeLevelData.map((grade) => (
                              <TableRow key={grade.id}>
                                <TableCell>{grade.level}</TableCell>
                                <TableCell align="right">{grade.aboveAverage}%</TableCell>
                                <TableCell align="right">{grade.average}%</TableCell>
                                <TableCell align="right">{grade.belowAverage}%</TableCell>
                                <TableCell align="right">{grade.improvementRate}%</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </div>
              )}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          {!showReportPreview ? (
            <>
              <Button onClick={handleCloseGenerateReportDialog}>Cancel</Button>
              <Button onClick={() => setShowReportPreview(true)}>Preview Report</Button>
            </>
          ) : (
            <>
              <Button onClick={() => setShowReportPreview(false)}>Back to Options</Button>
              <Button onClick={handleGenerateReport} variant="contained">
                Generate Report
              </Button>
              <Button onClick={handleDownloadReport} startIcon={<DownloadIcon />}>
                Download
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminPage;
