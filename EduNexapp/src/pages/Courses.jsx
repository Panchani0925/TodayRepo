"use client";

import {
  Award,
  BookOpen,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Lock,
  X,
} from "lucide-react";
import { useState } from "react";

// Payment Modal Component
const PaymentModal = ({
  setShowPayment,
  paymentMethod,
  setPaymentMethod,
  course,
  formData,
  handleInputChange,
  handleSubmit,
  processing,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold">Complete Payment</h3>
        <button
          onClick={() => setShowPayment(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <div></div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Course Price:</span>
          <span className="text-lg font-bold">${course.price}</span>
        </div>

        {!paymentMethod && (
          <div className="space-y-4">
            <button
              onClick={() => setPaymentMethod("card")}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <CreditCard className="w-5 h-5" />
              Pay with Credit Card
            </button>
            <button
              onClick={() => setPaymentMethod("bank")}
              className="w-full border-2 border-gray-300 py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Pay with Bank Transfer
            </button>
          </div>
        )}

        {paymentMethod === "card" && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {processing ? (
                <>Processing...</>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Pay ${course.price}
                </>
              )}
            </button>
          </form>
        )}

        {paymentMethod === "bank" && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Bank Transfer Details</h4>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Bank Name:</strong> Example Bank
                </p>
                <p>
                  <strong>Account Name:</strong> Web Development Academy
                </p>
                <p>
                  <strong>Account Number:</strong> 1234567890
                </p>
                <p>
                  <strong>Sort Code:</strong> 12-34-56
                </p>
                <p>
                  <strong>Reference:</strong> COURSE-
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Please use the reference above when making your transfer. Once we
              receive your payment, you'll get access to the course within 24
              hours.
            </p>
            <button
              onClick={() => setShowPayment(false)}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              I've Made the Transfer
            </button>
          </div>
        )}
      </div>

      {paymentMethod && (
        <button
          onClick={() => setPaymentMethod(null)}
          className="text-gray-600 hover:text-gray-800 text-sm"
        >
          ← Choose a different payment method
        </button>
      )}
    </div>
  </div>
);

// Course Card Component
const CourseCard = ({ course, handleEnroll, handleViewDetails }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
    <img
      className="h-32 w-full object-cover"
      src={course.image || "/placeholder.svg"}
      alt={`${course.title} cover`}
    />
    <div className="p-4">
      <h3 className="text-lg font-bold">{course.title}</h3>
      <p className="text-sm text-gray-600">
        {course.duration} | {course.level}
      </p>
      <p className="mt-2 text-gray-800">${course.price}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => handleEnroll(course)}
          className="bg-blue-600 text-white px-3 py-2 rounded flex-1 text-sm hover:bg-blue-700 transition-colors"
        >
          Enroll Now
        </button>
        <button
          onClick={() => handleViewDetails(course)}
          className="border border-blue-600 text-blue-600 px-3 py-2 rounded flex-1 text-sm hover:bg-blue-50 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  </div>
);

// New Details Modal Component
const DetailsModal = ({ course, setShowDetails }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg p-6 max-w-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">{course.title}</h3>
        <button
          onClick={() => setShowDetails(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <img
        src={course.image || "/placeholder.svg"}
        alt={course.title}
        className="w-full rounded mb-4"
      />
      <p className="text-gray-700 mb-4">{course.description}</p>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Duration: {course.duration}</span>
        <span>Level: {course.level}</span>
      </div>
      <div className="mt-4 text-xl font-bold text-gray-900">
        Price: ${course.price}
      </div>
    </div>
  </div>
);

export default function CoursePlatform() {
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [processing, setProcessing] = useState(false);
  // New state for Course Details Modal
  const [showDetails, setShowDetails] = useState(false);
  const [detailsCourse, setDetailsCourse] = useState(null);

  const featuredCourse = {
    title: "Advanced Level Combined Maths ",
    description:
      "Practical application is critical for mastering Combined Mathematics, as it bridges theoretical concepts with real-world problem-solving.",
    duration: "12 weeks",
    level: "Intermediate",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
  };

  const [selectedCourse, setSelectedCourse] = useState(featuredCourse);

  // A/L (Advanced Level) Subjects
  const alSubjects = [
    {
      id: 1,
      title: "A/L Mathematics",
      description:
        "Master advanced mathematical concepts including calculus, algebra, and statistics for A/L exams.",
      duration: "1 year",
      level: "Advanced",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "A/L Physics",
      description:
        "Comprehensive physics course covering mechanics, electricity, magnetism, and modern physics.",
      duration: "1 year",
      level: "Advanced",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "A/L Chemistry",
      description:
        "In-depth study of organic, inorganic, and physical chemistry with practical lab sessions.",
      duration: "1 year",
      level: "Advanced",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "A/L Biology",
      description:
        "Comprehensive biology course covering genetics, ecology, human physiology, and molecular biology.",
      duration: "1 year",
      level: "Advanced",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // O/L (Ordinary Level) Subjects
  const olSubjects = [
    {
      id: 5,
      title: "O/L Mathematics",
      description:
        "Build a strong foundation in mathematics with this comprehensive O/L preparation course.",
      duration: "9 months",
      level: "Intermediate",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      title: "O/L Science",
      description:
        "Learn the fundamentals of physics, chemistry, and biology for O/L examinations.",
      duration: "9 months",
      level: "Intermediate",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      title: "O/L English",
      description:
        "Improve your English language skills with comprehensive grammar, vocabulary, and literature lessons.",
      duration: "9 months",
      level: "Intermediate",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      title: "O/L History",
      description:
        "Explore world and local history with engaging lessons and exam preparation techniques.",
      duration: "9 months",
      level: "Intermediate",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1461360370896-922624d12aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  // Additional subjects for both categories
  const additionalALSubjects = [
    {
      id: 9,
      title: "A/L Economics",
      description:
        "Comprehensive study of micro and macroeconomics with real-world applications.",
      duration: "1 year",
      level: "Advanced",
      price: 549,
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 10,
      title: "A/L Business Studies",
      description:
        "Learn business management, marketing, finance, and entrepreneurship for A/L exams.",
      duration: "1 year",
      level: "Advanced",
      price: 549,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 11,
      title: "A/L Accounting",
      description:
        "Master financial accounting, cost accounting, and management accounting principles.",
      duration: "1 year",
      level: "Advanced",
      price: 549,
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 12,
      title: "A/L ICT",
      description:
        "Comprehensive information and communication technology course with practical applications.",
      duration: "1 year",
      level: "Advanced",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const additionalOLSubjects = [
    {
      id: 13,
      title: "O/L Geography",
      description:
        "Explore physical and human geography with map reading and geographical analysis.",
      duration: "9 months",
      level: "Intermediate",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1519500099198-fd81846bc57f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 14,
      title: "O/L ICT",
      description:
        "Learn computer fundamentals, software applications, and basic programming concepts.",
      duration: "9 months",
      level: "Intermediate",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 15,
      title: "O/L Business Studies",
      description:
        "Introduction to business concepts, entrepreneurship, and basic accounting principles.",
      duration: "9 months",
      level: "Intermediate",
      price: 349,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 16,
      title: "O/L Music",
      description:
        "Develop musical theory knowledge and practical skills for O/L examinations.",
      duration: "9 months",
      level: "Intermediate",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setShowPayment(true);
  };

  // New handler for showing course details
  const handleViewDetails = (course) => {
    setDetailsCourse(course);
    setShowDetails(true);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      setFormData({ ...formData, [name]: formatCardNumber(value) });
    } else if (name === "expiry") {
      const formatted = value
        .replace(/[^0-9]/g, "")
        .slice(0, 4)
        .replace(/^([2-9])/, "0$1")
        .replace(/^(1[3-9])/, "12")
        .replace(/^([0-1])([0-9])/, "$1$2/")
        .replace(/^([0-1])([0-9])([0-9])([0-9])/, "$1$2/$3$4");
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Show success message and close modal
    alert("Payment successful! Welcome to the course.");
    setProcessing(false);
    setShowPayment(false);
    setPaymentMethod(null);
    setFormData({
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvv: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-24 text-black bg-gradient-to-b from-white to-blue-100">
        <div className="max-w-7xl mx-auto text-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Courses
              </h1>
              <ul className="text-xl space-y-4 text-left max-w-lg mx-auto">
                <li className="flex items-start">
                  <span className="mr-2">📚</span>
                  <span>
                    Learn Anytime, Master Anything: Flexible Courses for Your
                    Pace.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎯</span>
                  <span>
                    Transform Your Skills: Expert-Led Courses for Real-World
                    Success.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>
                    Unlock Your Potential: Interactive Lessons, Proven Results.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🌟</span>
                  <span>
                    From Basics to Brilliance: Step-by-Step Learning for All
                    Levels.
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Featured Courses</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-semibold">A/L Science Subjects</h3>
                  <p className="text-sm text-gray-600">
                    Physics, Chemistry, Biology, and Mathematics
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-semibold">O/L Core Subjects</h3>
                  <p className="text-sm text-gray-600">
                    Mathematics, Science, English, and more
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-md">
                  <h3 className="font-semibold">A/L Commerce Stream</h3>
                  <p className="text-sm text-gray-600">
                    Economics, Business Studies, and Accounting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Course */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-96"
                src={featuredCourse.image || "/placeholder.svg"}
                alt="Course cover"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                Featured Course
              </div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                {featuredCourse.title}
              </h1>
              <p className="mt-4 text-gray-600">{featuredCourse.description}</p>

              <div className="mt-6 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span>{featuredCourse.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-500" />
                  <span>{featuredCourse.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-500" />
                  <span>Certificate</span>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="text-3xl font-bold text-gray-900">
                  ${featuredCourse.price}
                </div>
                <button
                  onClick={() => handleEnroll(featuredCourse)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  Enroll Now
                </button>
                <button
                  onClick={() => handleViewDetails(featuredCourse)}
                  className="border border-blue-600 text-blue-600 px-4 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A/L Subjects Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">A/L Subjects</h2>
          <button
            onClick={() => alert("View all A/L subjects")}
            className="text-blue-600 hover:text-blue-800"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {alSubjects.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              handleEnroll={handleEnroll}
              handleViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* O/L Subjects Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">O/L Subjects</h2>
          <button
            onClick={() => alert("View all O/L subjects")}
            className="text-blue-600 hover:text-blue-800"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {olSubjects.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              handleEnroll={handleEnroll}
              handleViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Additional A/L Subjects */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">A/L Commerce & Arts Subjects</h2>
          <button
            onClick={() => alert("View all A/L Commerce & Arts subjects")}
            className="text-blue-600 hover:text-blue-800"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {additionalALSubjects.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              handleEnroll={handleEnroll}
              handleViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Additional O/L Subjects */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Additional O/L Subjects</h2>
          <button
            onClick={() => alert("View all additional O/L subjects")}
            className="text-blue-600 hover:text-blue-800"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {additionalOLSubjects.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              handleEnroll={handleEnroll}
              handleViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>

      {/* Render Details Modal if showDetails is true */}
      {showDetails && detailsCourse && (
        <DetailsModal course={detailsCourse} setShowDetails={setShowDetails} />
      )}

      {/* Payment Modal */}
      {showPayment && (
        <PaymentModal
          setShowPayment={setShowPayment}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          course={selectedCourse}
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          processing={processing}
        />
      )}
    </div>
  );
}
