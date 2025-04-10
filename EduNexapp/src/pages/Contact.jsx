import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Menu, Phone } from "lucide-react";

export default function Contact() {


  return (
    <div className="min-h-screen">
      <div
        className="bg-[#231b5d] text-white px-4 py-3"
        style={{
          backgroundImage: "url('/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        {/* Hero Section */}
        <section className="py-24 text-black bg-white bg-opacity-25 text-center">
          <div className="max-w-7xl mx-auto text-center px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
                  Start Your Education Journey With Us
                </h1>
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center text-[#231b5d]">
                    Contact Us
                  </h1>
                  <p className="text-xl text-center">
                    Get in touch with our team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Send us a message
              </h2>
              <form className="contact-form">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-blue-950 text-white">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-black">
                Contact Information
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-blue-950" />
                      <div>
                        <h3 className="font-semibold text-black">Phone</h3>
                        <p className="text-[#231b5d]">(+94) 714 099346</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-blue-950" />
                      <div>
                        <h3 className="font-semibold text-black">Email</h3>
                        <p className="text-[#231b5d]">EduNex@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-blue-950" />
                      <div className="space-y-1 text-black">
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-[#231b5d]">Colombo, Sri Lanka</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
