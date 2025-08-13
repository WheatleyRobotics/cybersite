'use client'

import { ArrowLeft, Calendar, Users, Rocket, Lightbulb, Gift, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function EventsImpactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-red-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/impact" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="font-mono text-sm">BACK TO IMPACT</span>
            </Link>
            
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500">
                Community Events
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our school-hosted events inspire future generations and showcase the exciting world of STEM to hundreds of students and families in our community.
              </p>
            </div>
          </div>
        </section>

        {/* Technology and Coding Night */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-8">
                  <Rocket className="w-10 h-10 text-red-500 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                    Technology and Coding Night
                  </h2>
                </div>
                
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Flagship Event</h3>
                  <div className="relative mb-6">
                    <Image
                      src="/impact/events/tech_code_night.jpg"
                      alt="Students participating in Technology and Coding Night workshop with laptops"
                      width={800}
                      height={400}
                      className="rounded-lg shadow-lg border border-red-500/20"
                      unoptimized
                    />
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    During our annual district Technology and Coding Night, we showcase our robot to over 300 students from kindergarten through 12th grade. Students in our community get to experience driving the robot firsthand, sparking their initial interest in STEM and robotics.
                  </p>
                  <p className="text-gray-300 text-lg mb-6">
                    Technology and Coding Night is one of many annual events that we utilize to attract future members. The interactive nature of the event allows young students to see technology in action and imagine themselves as future engineers and programmers.
                  </p>
                  <p className="text-gray-300 text-lg">
                    Over the past three years, these experiences have garnered interest in STEM among young students, increasing membership on our FRC, FTC, and FLL teams.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-5xl font-bold text-red-500 mb-2">300+</div>
                  <div className="text-white text-lg mb-2">Students</div>
                  <div className="text-gray-400 text-sm">From K-12 attend annually</div>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-5xl font-bold text-red-500 mb-2">200+</div>
                  <div className="text-white text-lg mb-2">Toys</div>
                  <div className="text-gray-400 text-sm">Collected for Toys for Tots</div>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-5xl font-bold text-red-500 mb-2">Annual</div>
                  <div className="text-white text-lg mb-2">Tradition</div>
                  <div className="text-gray-400 text-sm">Flagship community event</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEAM Fair */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-red-500 mr-3" />
                  <h2 className="text-3xl md:text-4xl font-bold text-red-500">STEAM Fair</h2>
                </div>
                <div className="relative mb-6">
                  <Image
                    src="/impact/events/steam_night.png"
                    alt="CyberCats robot demonstration at STEAM fair with students watching"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg border border-red-500/20"
                    unoptimized
                  />
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  Our participation in the school&apos;s STEAM fair provides another opportunity for us to showcase robotics and engineering to younger students. We set up interactive demonstrations where attendees can learn about robot mechanisms, programming concepts, and engineering design.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  The fair format allows us to engage with students who might not otherwise be exposed to robotics, expanding our reach beyond just technology-focused events.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-4">Cross-Curricular Impact</h4>
                  <p className="text-gray-300 text-lg">
                    The STEAM fair demonstrates how Science, Technology, Engineering, Arts, and Mathematics work together in real-world applications like robotics.
                  </p>
                </div>
                
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-4">Inspiring Innovation</h4>
                  <p className="text-gray-300 text-lg">
                    Students see how creative problem-solving and technical skills combine to build functional robots that compete at regional and national levels.
                  </p>
                </div>
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-4">Interactive Learning</h4>
                  <p className="text-gray-300">
                    Hands-on demonstrations allow students to experience STEM concepts firsthand, making abstract engineering principles tangible and exciting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safe Halloween */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 to-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-red-500 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-red-500">Safe Halloween</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our participation in Safe Halloween events brings robotics to families in a fun, accessible environment where children can interact with our robot while enjoying a safe community celebration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-lg text-center">
                <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Family Engagement</h3>
                <p className="text-gray-300">
                  Reaching families with young children who might not otherwise encounter robotics programs
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-lg text-center">
                <Calendar className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Community Integration</h3>
                <p className="text-gray-300">
                  Becoming part of beloved community traditions while showcasing STEM education
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-lg text-center">
                <Lightbulb className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Early Inspiration</h3>
                <p className="text-gray-300">
                  Planting seeds of interest in STEM among very young children through fun interactions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Event Innovation */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 to-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              Innovation in Event Design
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Interactive Experiences</h3>
                <p className="text-gray-300 text-lg mb-6">
                  We&apos;ve provided interactive STEM activities during our school&apos;s annual events, such as allowing guests to drive our robot. This hands-on approach transforms passive observation into active engagement, creating memorable experiences that inspire future participation.
                </p>
                <p className="text-gray-300 text-lg">
                  Our approach goes beyond simple demonstrations - we create opportunities for attendees to become temporary team members, experiencing the thrill of controlling a competition robot firsthand.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Community Partnership Model</h3>
                <p className="text-gray-300 text-lg mb-6">
                  By integrating charitable giving into our events (like Toys for Tots collections), we demonstrate how STEM teams can be forces for good in their communities. This model shows that technical excellence and social responsibility go hand in hand.
                </p>
                <p className="text-gray-300 text-lg">
                  Our events serve as a blueprint for other teams looking to increase their community impact while growing their programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Bonding & Community */}
        <section className="py-16 bg-gradient-to-b from-gray-900/20 via-gray-900/50 to-red-900/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              Building Community Through Events
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Team Dinners & Presentations</h3>
                <div className="relative mb-6">
                  <Image
                    src="/impact/events/dinner.jpg"
                    alt="CyberCats team dinner with mini presentations and community gathering"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg border border-red-500/20"
                    unoptimized
                  />
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  On our Saturday meetings, we host a group lunch where a parent volunteers to bring in food for our team. This not only allows us to take a break from all the hard work we have been doing during the build season but it also gives us the opportunity to spend time together as a team.
                </p>
                <p className="text-gray-300 text-lg">
                  Through this, we have formed closer bonds with one another and our mentors. We have created long lasting friendships with each other. We are not just a team, we are a family.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Educational Field Trips</h3>
                <div className="relative mb-6">
                  <Image
                    src="/impact/events/field_trip.jpg"
                    alt="Students learning from CyberCats robot demonstration during educational visit"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg border border-red-500/20"
                    unoptimized
                  />
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  We regularly visit other schools and host field trips where younger students can interact with our robots and learn about STEM. These visits help us extend our reach beyond our own school district and inspire students who might not otherwise have exposure to robotics.
                </p>
                <p className="text-gray-300 text-lg">
                  The interactive nature of these visits allows students to see robotics up close and ask questions directly to our team members, creating personal connections that often lead to sustained interest in STEM fields.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="relative max-w-4xl mx-auto">
                <Image
                  src="/impact/events/dinner_meetup_li.jpeg"
                  alt="CyberCats team group photo during Long Island meetup event"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg border border-red-500/20"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <p className="text-gray-300 text-lg mt-6">
                We participate in Long Island robotics meetups, building connections with other teams and sharing knowledge across the robotics community.
              </p>
            </div>
          </div>
        </section>

        {/* Future Event Goals */}
        <section className="py-16 bg-gradient-to-b from-red-900/10 via-red-900/20 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-500">
              Expanding Our Reach
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              As we continue to grow our event programming, we remain committed to making STEM education accessible and exciting for students of all ages. Our events serve as entry points into the world of robotics and engineering, showing young people that they too can be innovators and problem-solvers.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              The effect of these initiatives has been evident through the increased interest in technology and attendance throughout the season that we have observed. Each event plants seeds that grow into the next generation of team members and STEM leaders.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}