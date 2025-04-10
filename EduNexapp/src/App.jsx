import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AdminPage from "./components2/AdminPage";
import ParentDashboard from "./components2/ParentDashboard";
import StudentDashboard from "./components2/StudentDashboard";
import TeacherDashboard from "./components2/TeacherDashboard";
import "./index.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Course from "./pages/Courses";
import ForgotPassword from "./pages/Forgot-Password";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import StudentTestimonials from "./pages/StudentTestimonials";
import TeachersGrid from "./pages/Teachers";

function App() {
  const location = useLocation();

  // Define routes where the header and footer should not be displayed
  const noHeaderFooterRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/admin",
    "/parent-dashboard",
    "/student-dashboard",
    "/teacher-dashboard",
  ];
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Header */}
      {!hideHeaderFooter && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<Course />} />
          <Route
            path="/studentTestimonials"
            element={<StudentTestimonials />}
          />
          <Route path="/Teachers" element={<TeachersGrid />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/parent-dashboard" element={<ParentDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </main>
      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
