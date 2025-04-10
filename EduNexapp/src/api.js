// API service to connect with the backend
const API_URL = "http://localhost:5000"; // Update this to match your backend URL

export async function fetchWithAuth(endpoint, options = {}) {
  const token = localStorage.getItem("authToken");

  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

// API functions for different entities
export const api = {
  // Auth
  login: async (name, password, role) => {
    const response = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password, role }),
    });

    if (!response.ok) {
      throw new Error("Login failed");
    }

    return response.json();
  },

  // Users/Students
  getUsers: () => fetchWithAuth("/users"),
  addUser: (userData) =>
    fetchWithAuth("/users", {
      method: "POST",
      body: JSON.stringify(userData),
    }),
  updateUser: (id, userData) =>
    fetchWithAuth(`/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(userData),
    }),
  deleteUser: (id) =>
    fetchWithAuth(`/users/${id}`, {
      method: "DELETE",
    }),

  // Teachers
  getTeachers: () => fetchWithAuth("/teachers"),
  addTeacher: (teacherData) =>
    fetchWithAuth("/teachers", {
      method: "POST",
      body: JSON.stringify(teacherData),
    }),
  deleteTeacher: (id) =>
    fetchWithAuth(`/teachers/${id}`, {
      method: "DELETE",
    }),

  // Parents
  getParents: () => fetchWithAuth("/parents"),
  addParent: (parentData) =>
    fetchWithAuth("/parents", {
      method: "POST",
      body: JSON.stringify(parentData),
    }),
  deleteParent: (id) =>
    fetchWithAuth(`/parents/${id}`, {
      method: "DELETE",
    }),

  // Courses
  getCourses: () => fetchWithAuth("/api/available-courses"), // Updated to match backend endpoint
  addCourse: (courseData) =>
    fetchWithAuth("/new-course", {
      // Updated to match backend endpoint
      method: "POST",
      body: JSON.stringify(courseData),
    }),
  updateCourse: (id, courseData) =>
    fetchWithAuth(`/update-course/${id}`, {
      method: "PUT",
      body: JSON.stringify(courseData),
    }),
  deleteCourse: (id) =>
    fetchWithAuth(`/remove-course/${id}`, {
      method: "DELETE",
    }),

  // Assignments
  getAssignments: (courseId) => fetchWithAuth(`/assignments/${courseId}`),
  getAllAssignments: () => fetchWithAuth("/upcoming-deadlines"),
  addAssignment: (assignmentData) =>
    fetchWithAuth("/assignments", {
      method: "POST",
      body: JSON.stringify(assignmentData),
    }),

  // Live Classes
  getLiveClasses: () => fetchWithAuth("/scheduled-live-classes"),
  addLiveClass: (liveClassData) =>
    fetchWithAuth("/live-classes", {
      method: "POST",
      body: JSON.stringify(liveClassData),
    }),

  // Resources
  getResources: (courseId) => fetchWithAuth(`/resources/${courseId}`),
  getAllResources: () => fetchWithAuth("/study-resources"),
  addResource: (resourceData) =>
    fetchWithAuth("/resources", {
      method: "POST",
      body: JSON.stringify(resourceData),
    }),

  // Dashboard Stats
  getStudentCount: () => fetchWithAuth("/api/students/count"),
  getTeacherCount: () => fetchWithAuth("/api/teachers/count"),
  getSubjectCount: () => fetchWithAuth("/api/subjects/count"),

  // Feedback
  getFeedback: () => fetchWithAuth("/api/feedback"),

  // Contact
  sendContactMessage: (messageData) =>
    fetchWithAuth("/api/contact", {
      method: "POST",
      body: JSON.stringify(messageData),
    }),

  // Discussion
  getDiscussion: (courseId) => fetchWithAuth(`/discussion/${courseId}`),
  addDiscussionMessage: (messageData) =>
    fetchWithAuth("/discussion", {
      method: "POST",
      body: JSON.stringify(messageData),
    }),

  // Parent-Student
  getParentStudentRelationships: () => fetchWithAuth("/parent-student"),
  assignParentToStudent: (data) =>
    fetchWithAuth("/assign-parent", {
      method: "POST",
      body: JSON.stringify(data),
    }),


  // Engagement Tracking
  getEngagementTracking: () => fetchWithAuth("/engagement-tracking"),

  // Notifications
  getNotifications: () => fetchWithAuth("/notifications"),
};
