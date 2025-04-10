"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"

export default function TeachersGrid() {
  const [activeTab, setActiveTab] = useState("all")

  const teachers = [
    {
      id: "1",
      name: "Mrs. Fernando",
      students: 2000,
      subjects: ["Mathematics", "Further Mathematics"],
      level: "AL",
      image: "/t13.jpg",
      rating: 4.8,
      experience: 15,
    },
    {
      id: "2",
      name: "Mr. Perera",
      students: 1850,
      subjects: ["Physics", "Combined Mathematics"],
      level: "AL",
      image: "/t11.jpg",
      rating: 4.7,
      experience: 12,
    },
    {
      id: "3",
      name: "Ms. Jayawardena",
      students: 1600,
      subjects: ["Chemistry", "Biology"],
      level: "AL",
      image: "/t15.jpg",
      rating: 4.9,
      experience: 10,
    },
    {
      id: "4",
      name: "Mr. Silva",
      students: 1200,
      subjects: ["English Literature", "English Language"],
      level: "OL",
      image: "/t12.jpg",
      rating: 4.6,
      experience: 8,
    },
    {
      id: "5",
      name: "Mrs. Gunawardena",
      students: 1750,
      subjects: ["Science", "Mathematics"],
      level: "OL",
      image: "/t16.jpg",
      rating: 4.5,
      experience: 14,
    },
    {
      id: "6",
      name: "Mr. Bandara",
      students: 1400,
      subjects: ["History", "Geography"],
      level: "OL",
      image: "/t11.jpg",
      rating: 4.7,
      experience: 11,
    },
  ]

  const filteredTeachers = activeTab === "all" ? teachers : teachers.filter((teacher) => teacher.level === activeTab)

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Expert Teachers</h2>

      <Tabs defaultValue="all" className="w-full mb-8">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setActiveTab("all")} className="px-8">
              All Teachers
            </TabsTrigger>
            <TabsTrigger value="AL" onClick={() => setActiveTab("AL")} className="px-8">
              AL Teachers
            </TabsTrigger>
            <TabsTrigger value="OL" onClick={() => setActiveTab("OL")} className="px-8">
              OL Teachers
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="AL" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="OL" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2">
      <div className="relative pt-6 px-6">
        <div className="aspect-square overflow-hidden rounded-full mx-auto border-4 border-gray-100 w-32 h-32">
          <img src={teacher.image || "/placeholder.svg"} alt={teacher.name} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
          {teacher.level}
        </div>
        <div className="mt-6 bg-[#1d1b4b] text-white p-4 rounded-t-xl">
          <h3 className="text-xl font-semibold mb-1">{teacher.name}</h3>
          <p className="text-gray-200">{teacher.students.toLocaleString()}+ students</p>
        </div>
        <div className="p-4 bg-gray-50">
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < Math.floor(teacher.rating) ? "currentColor" : "none"}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ))}
            </div>
            <span className="text-sm font-medium">{teacher.rating}/5.0</span>
          </div>
          <div className="mb-2">
            <span className="text-sm font-medium">Experience: </span>
            <span className="text-sm">{teacher.experience} years</span>
          </div>
          <div>
            <span className="text-sm font-medium">Subjects: </span>
            <div className="flex flex-wrap gap-1 mt-1">
              {teacher.subjects.map((subject) => (
                <span key={subject} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
