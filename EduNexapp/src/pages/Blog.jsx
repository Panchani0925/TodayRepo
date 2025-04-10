import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import React, { useState } from "react";


export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Essential Study Techniques for O/L Mathematics",
      date: "March 15, 2024",
      excerpt:
        "Discover proven methods to master O/L Mathematics with these step-by-step techniques...",
      content:
        "Mathematics can be challenging for many O/L students, but with the right approach, you can significantly improve your performance. Start by understanding the fundamentals before moving to complex problems. Practice daily with past papers to familiarize yourself with question patterns. Create a formula sheet and review it regularly. Break down complex problems into smaller, manageable parts. Join study groups to discuss difficult concepts and learn from peers. Use visual aids like graphs and diagrams to understand abstract concepts. Most importantly, maintain a consistent study schedule and allocate more time to topics you find challenging. Remember, mathematics is about practice and persistence. The more you practice, the more confident you'll become in tackling any problem that comes your way in the O/L examination.",
      image: "/t1.jpg",
      category: "O/Ls",
    },
    {
      id: 2,
      title: "A/L Biology: Effective Revision Strategies",
      date: "February 28, 2024",
      excerpt:
        "Comprehensive revision strategies to help you excel in A/L Biology examinations...",
      content:
        "A/L Biology requires not just memorization but a deep understanding of biological concepts and their applications. Start your revision early, at least 3-4 months before the examination. Create mind maps for complex topics like genetics and cellular respiration to visualize relationships between concepts. Use color-coding in your notes to highlight important terms, definitions, and processes. Practice drawing and labeling diagrams as they are crucial in biology examinations. Review past papers to understand the examination pattern and practice time management. Form study groups with classmates to discuss complex topics and quiz each other. Use mnemonic devices to remember sequences and classifications. Create flashcards for quick revision of key terms and concepts. Most importantly, relate biological concepts to real-world examples to enhance understanding and retention. Regular revision and practice will build your confidence and prepare you thoroughly for the A/L Biology examination.",
      image: "/t2.jpg",
      category: "A/Ls",
    },
    {
      id: 3,
      title: "How to Balance Multiple Subjects for O/L Success",
      date: "January 20, 2024",
      excerpt:
        "Learn effective time management and study techniques to excel in all O/L subjects...",
      content:
        "Balancing multiple subjects for O/L examinations can be overwhelming, but with proper planning and time management, you can achieve excellent results across all subjects. Start by creating a realistic study timetable that allocates time to each subject based on its difficulty level and your proficiency. Use the Pomodoro technique - study for 25 minutes followed by a 5-minute break to maintain focus and prevent burnout. Prioritize subjects that you find challenging and allocate more time to them. Use different study methods for different subjects - flashcards for languages, practice problems for mathematics, and mind maps for science subjects. Take advantage of weekends to review the week's material and catch up on any topics you struggled with. Maintain a healthy lifestyle with proper sleep, nutrition, and exercise to optimize brain function. Join subject-specific study groups to learn from peers and clarify doubts. Remember, consistency is key - regular, focused study sessions are more effective than cramming before examinations. With disciplined effort and smart study strategies, you can achieve balanced success across all O/L subjects.",
      image: "/t3.jpg",
      category: "O/Ls",
    },
    {
      id: 4,
      title: "A/L Chemistry: From Basics to Advanced Concepts",
      date: "March 5, 2024",
      excerpt:
        "A comprehensive guide to mastering A/L Chemistry from fundamental principles to complex topics...",
      content:
        "A/L Chemistry builds upon the foundation of O/L Chemistry but introduces more complex concepts and calculations. To excel, start by ensuring your understanding of basic concepts like atomic structure, chemical bonding, and stoichiometry is solid. Create a systematic approach to learning organic chemistry by focusing on reaction mechanisms rather than memorizing individual reactions. For physical chemistry, practice numerical problems regularly to build calculation speed and accuracy. Use molecular models or 3D visualization software to understand complex molecular structures. Create cheat sheets for important formulas, constants, and equations. Practice drawing reaction mechanisms step by step. Review past papers to understand question patterns and practice time management. Join chemistry forums or study groups to discuss complex topics and gain new perspectives. Relate chemical concepts to real-world applications to enhance understanding and retention. Regular revision and practice will build your confidence and prepare you thoroughly for the A/L Chemistry examination.",
      image: "/t4.jpg",
      category: "A/Ls",
    },
    {
      id: 5,
      title: "Digital Resources for O/L English Language Preparation",
      date: "February 10, 2024",
      excerpt:
        "Discover the best online tools and resources to improve your English language skills for O/L examinations...",
      content:
        "In today's digital age, numerous online resources can significantly enhance your O/L English language preparation. Start with language learning apps like Duolingo or Babbel to strengthen your grammar and vocabulary. Use websites like British Council Learn English for comprehensive lessons on all aspects of English language. Practice reading comprehension with news websites like BBC Learning English or CNN Student News, which offer articles with varying difficulty levels. Improve your listening skills with podcasts designed for English learners, such as 'English Learning for Curious Minds' or 'Voice of America Learning English'. For writing practice, join online writing communities like Write & Improve by Cambridge, which provides automated feedback on your essays. Watch educational YouTube channels like 'English with Lucy' or 'engVid' for engaging lessons on grammar, pronunciation, and exam techniques. Join online forums or social media groups dedicated to O/L English preparation to connect with peers and share resources. Remember to practice consistently and seek feedback on your progress. With these digital resources, you can create a comprehensive and engaging English language preparation plan for your O/L examinations.",
      image: "/t5.jpg",
      category: "O/Ls",
    },
    {
      id: 6,
      title: "A/L Physics: Problem-Solving Techniques",
      date: "January 5, 2024",
      excerpt:
        "Master the art of solving complex physics problems for A/L examinations with these proven strategies...",
      content:
        "A/L Physics requires strong problem-solving skills along with conceptual understanding. To excel in physics problem-solving, start by thoroughly understanding the fundamental concepts and principles. When approaching a problem, first identify the physical principles involved and the relevant equations. Draw diagrams to visualize the problem and identify given and unknown variables. Convert all units to a consistent system (preferably SI units) before calculations. Break complex problems into smaller, manageable parts and solve them step by step. Practice dimensional analysis to verify your equations and check if your answer has the correct units. Develop the habit of estimating the answer before solving to check if your final answer is reasonable. Practice a wide variety of problems, including past paper questions, to familiarize yourself with different problem types. Join physics forums or study groups to discuss challenging problems and learn alternative solving methods. Remember, physics problem-solving improves with practice, so solve problems regularly and seek help when stuck. With consistent practice and a systematic approach, you can master A/L Physics problem-solving and excel in your examinations.",
      image: "/t6.jpg",
      category: "A/Ls",
    },
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        {/* Hero Section */}
        <section className="py-24 text-white bg-gradient-to-b from-white to-blue-900 relative overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-20 h-20 bg-blue-400 rounded-full opacity-10 top-1/4 left-1/4 animate-pulse"></div>
            <div
              className="absolute w-32 h-32 bg-blue-300 rounded-full opacity-10 top-3/4 left-1/3 animate-ping"
              style={{ animationDuration: "4s" }}
            ></div>
            <div
              className="absolute w-24 h-24 bg-blue-200 rounded-full opacity-10 top-1/3 right-1/4 animate-pulse"
              style={{ animationDuration: "7s" }}
            ></div>
            <div
              className="absolute w-16 h-16 bg-blue-100 rounded-full opacity-10 bottom-1/4 right-1/3 animate-ping"
              style={{ animationDuration: "5s" }}
            ></div>
          </div>

          {/* Enhanced content with effects */}
          <div className="max-w-7xl mx-auto text-center px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div className="container mx-auto px-4 transform transition-all duration-700 hover:scale-105">
                {/* Text effect for heading with gradient and animation */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  Blog<br>
                  </br><br></br>
                </h1>
                {/* Text effect for subtitle with typing animation */}
                <p className="text-xl text-blue-100 animate-fadeInDelayed relative overflow-hidden">
                  Latest insights and updates from EduNex
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 animate-slideRight"></span>
                </p>
              </div>

              
            </div>

            {/* Scroll indicator animation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg
                className="w-6 h-6 text-blue-200"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {selectedPost ? (
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {selectedPost.category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date}
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-900">{selectedPost.title}</h2>
              <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedPost.image || "/placeholder.svg"}
                  alt={selectedPost.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-lg text-gray-800 space-y-4">
                {selectedPost.content.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <button
                className="mt-8 text-blue-700 hover:text-blue-900 font-medium flex items-center"
                onClick={() => setSelectedPost(null)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </button>
            </div>
          ) : (
            <>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white group"
                  >
                    <CardContent className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                        </div>
                        <h2 className="text-xl font-semibold mb-2 text-blue-900 line-clamp-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <button
                          className="text-blue-700 hover:text-blue-900 font-medium flex items-center transition-colors"
                          onClick={() => handleReadMore(post)}
                        >
                          Read More
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
