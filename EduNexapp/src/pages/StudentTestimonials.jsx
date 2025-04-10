import { useState } from "react"
// import Image from "next/image" // removed since using Vite
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Link } from "react-router-dom"

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    image: "/t11.jpg",
    rating: 5,
    quote: "EduNex has transformed my learning experience!"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Data Scientist",
    image: "/t12.jpg",
    rating: 4,
    quote: "The courses are very comprehensive and easy to follow."
  },
  {
    id: 3,
    name: "Sam Wilson",
    role: "Product Manager",
    image: "/t15.jpg",
    rating: 5,
    quote: "I highly recommend EduNex to anyone looking to upskill."
  }
  // Add more testimonials as needed
];

export default function StudentTestimonials() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage,
  )

  return (
    <>
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              What Students Say About Us
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how EduNex has helped thousands of students achieve their learning goals and advance their careers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-12">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-4 h-4",
                          i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted",
                        )}
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <Button variant="outline" size="icon" onClick={prevPage} aria-label="Previous page">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <Button
                    key={i}
                    variant={i === currentPage ? "default" : "outline"}
                    size="icon"
                    className="w-8 h-8"
                    onClick={() => setCurrentPage(i)}
                    aria-label={`Page ${i + 1}`}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextPage} aria-label="Next page">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="inline-flex items-center justify-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <span>Join 50,000+ satisfied students</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Ready to transform your learning journey?
            </h3>
            <Link to="/register">
              <Button size="lg" className="mt-2">
                Start Learning Today
              </Button>
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="text-4xl font-bold">98%</h4>
              <p className="text-muted-foreground mt-2">Completion rate</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold">50K+</h4>
              <p className="text-muted-foreground mt-2">Active students</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold">200+</h4>
              <p className="text-muted-foreground mt-2">Expert instructors</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold">4.8/5</h4>
              <p className="text-muted-foreground mt-2">Average rating</p>
            </div>
          </div>
          {/* ...existing code... */}
        </div>
      </section>
      <div className="text-center mt-8">
        <Link to="/" className="underline text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    </>
  )
}
