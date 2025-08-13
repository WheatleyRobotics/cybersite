'use client'

import { ArrowLeft, Trophy, Users, Target, Heart, Wrench, BookOpen } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FirstImpactPage() {
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
                FIRST Programs
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Since our inception in 2009, we have prioritized spreading FIRST&apos;s message to the rest of the world through mentorship, education, and community engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Origins */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500">
                  Our Beginning
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  We initially began as a senior seminar program to allow students to apply their knowledge of STEM in a creative and engaging way. In 2016, we became a club, opening the door for younger members to participate in the FIRST Robotics Competition.
                </p>
                <p className="text-gray-300 text-lg">
                  This transformation marked the beginning of our commitment to making FIRST accessible to students of all grade levels and backgrounds.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-red-500/20 p-8 rounded-lg">
                <div className="text-6xl font-bold text-red-500 mb-2">2009</div>
                <div className="text-white text-xl mb-4">Founded</div>
                <div className="text-gray-300 mb-6">
                  Started as a senior seminar program
                </div>
                <div className="text-4xl font-bold text-red-500 mb-2">2016</div>
                <div className="text-white text-xl mb-4">Club Formation</div>
                <div className="text-gray-300">
                  Opened to all students
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FLL Program */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              FIRST Lego League Impact
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg mb-8">
                  <div className="flex items-center mb-6">
                    <Wrench className="w-8 h-8 text-red-500 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Team 27919 Mentorship</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    We began our FIRST Lego League team, team 27919, in 2016. We travel to tournaments with team 27919 to support them during their qualifiers. To increase engagement, we visit the middle school weekly to share our thoughts and insights.
                  </p>
                  <p className="text-gray-300 text-lg">
                    We help with their build, code, and innovation project every year, ensuring they have the support needed to succeed in competition and beyond.
                  </p>
                </div>

                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                  <div className="flex items-center mb-6">
                    <Trophy className="w-8 h-8 text-red-500 mr-3" />
                    <h3 className="text-2xl font-bold text-white">FLL Team Day</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    On November 9th, 2024, we hosted a FIRST Lego League Team Day, both a mentor coaching session and a team bonding day for their students. New coaches were trained to coach a robotics team while their students participated in activities guided by us.
                  </p>
                  <p className="text-gray-300 text-lg">
                    We had 15+ attendees at the event. This is the first time anyone has hosted a training event incorporating mentors and students, showing future FRC students how STEM can be integrated into their everyday lives.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
                  <div className="text-white text-lg mb-2">Students</div>
                  <div className="text-gray-400 text-sm">Moved from FLL to FRC in past 3 years</div>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">Weekly</div>
                  <div className="text-white text-lg mb-2">Visits</div>
                  <div className="text-gray-400 text-sm">To middle school during FLL season</div>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
                  <div className="text-white text-lg mb-2">Attendees</div>
                  <div className="text-gray-400 text-sm">At our inaugural FLL Team Day</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FTC Program */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 to-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              FIRST Tech Challenge Initiative
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <BookOpen className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Robotics Class</h3>
                </div>
                <div className="relative mb-6">
                  <Image
                    src="/impact/first/ftc.jpg"
                    alt="Young students watching FTC robot demonstration with CyberCats team"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg border border-red-500/20"
                    unoptimized
                  />
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  To popularize the FIRST program, we advocated to start a Robotics class at The Wheatley School in 2024. In its inaugural year, it attracted 15 students who put in immense amounts of effort to participate in the FIRST Tech Challenge.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  While many of our team members are committed to spending over 20 hours a week building a robot after school, not everyone can do so. Therefore, the Robotics class provides students with the opportunity to experience engineering, mechanics, and computer science all through the FIRST Robotics lens.
                </p>
                <p className="text-gray-300 text-lg">
                  In 2024, we initiated our FIRST Tech Challenge team through this newly established Robotics class. This group of 15 students comes together every other day and works hard to prepare for their tournament.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                  <div className="text-5xl font-bold text-red-500 mb-4">2024</div>
                  <div className="text-white text-xl mb-4">Robotics Class Launch</div>
                  <div className="text-gray-300">
                    Successfully advocated for and established the first Robotics class at Wheatley School
                  </div>
                </div>

                <div className="bg-black/50 border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">15</div>
                  <div className="text-white text-lg mb-2">Students</div>
                  <div className="text-gray-400 text-sm">Enrolled in inaugural Robotics class</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outreach Activities */}
        <section className="py-16 bg-gradient-to-b from-gray-900/20 via-gray-900/50 to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              STEM Outreach Beyond FIRST
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Girl Scout Partnership</h3>
                </div>
                <p className="text-gray-300 text-lg mb-4">
                  To increase female representation, we are working with 20 Girl Scouts to spread ideas of STEM and FIRST. With the scouts, we are assisting them in receiving their Robotics merit badge by demonstrating how certain mechanisms are built.
                </p>
              </div>

              <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-red-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Merit Badge Program</h3>
                </div>
                <p className="text-gray-300 text-lg mb-4">
                  Outside of working with other teams, we&apos;ve had the honor of working with Scout troops to help them gain their robotics merit badge. We provide hands-on demonstrations and interactive learning experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Impact */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 to-gray-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              Spreading the FIRST Message
            </h2>
            
            <div className="text-center mb-12">
              <div className="relative max-w-4xl mx-auto mb-8">
                <Image
                  src="/impact/first/presentation.png"
                  alt="CyberCats team members presenting at FIRST robotics competition event"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg border border-red-500/20 mx-auto block"
                  unoptimized
                />
              </div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                For the past 3 years, we have worked on spreading the values of FIRST to the world by being active on our social media platforms. We consistently post content showing the progress of our season while displaying engaging content to catch the attention of all viewers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-8 rounded-lg">
                <div className="text-5xl font-bold text-red-500 mb-4">4000+</div>
                <div className="text-white text-xl mb-2">Monthly Views</div>
                <div className="text-gray-400">Instagram platform reach last month</div>
              </div>

              <div className="text-center bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-8 rounded-lg">
                <div className="text-5xl font-bold text-red-500 mb-4">Daily</div>
                <div className="text-white text-xl mb-2">Updates</div>
                <div className="text-gray-400">Social media posts during season</div>
              </div>

              <div className="text-center bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-8 rounded-lg">
                <div className="text-5xl font-bold text-red-500 mb-4">Weekly</div>
                <div className="text-white text-xl mb-2">Videos</div>
                <div className="text-gray-400">Progression videos on YouTube</div>
              </div>
            </div>
          </div>
        </section>

        {/* Role Models Section */}
        <section className="py-16 bg-gradient-to-b from-gray-900/40 via-gray-900/50 to-red-900/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              Acting as Role Models
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Community Service Integration</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Over the past few years, we&apos;ve strived to aid our community by donating to nonprofit organizations. We worked alongside FLL members from different schools to host soup drives, packing over 100 dry soup bags that were distributed to a homeless shelter.
                </p>
                <p className="text-gray-300 text-lg">
                  Additionally, during our district&apos;s events, such as Technology and Coding Night, we&apos;ve collected over 200 toys for Toys for Tots. Many were eager to donate because it was their &quot;entry ticket&quot; to the event.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-black/50 border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">100+</div>
                  <div className="text-white text-lg mb-2">Soup Bags</div>
                  <div className="text-gray-400 text-sm">Packed for homeless shelter</div>
                </div>

                <div className="bg-black/50 border border-red-500/20 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-red-500 mb-2">200+</div>
                  <div className="text-white text-lg mb-2">Toys Collected</div>
                  <div className="text-gray-400 text-sm">For Toys for Tots program</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Goals */}
        <section className="py-16 bg-gradient-to-b from-red-900/10 via-red-900/20 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-500">
              Continuing the Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We work hard to fulfill the mission of FIRST by taking action both inside and outside of our team. Our goal is to foster a passion for STEM in others. Through our robotics and innovation classes, we inspire students to create solutions to the problems they face each day.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Externally, we have promoted STEM by mentoring our district&apos;s FLL team, engaging guests at outreach events, and helping local scout troops gain their robotics merit badges. Thanks to our innovation and robotics classes, we&apos;ve gained more interest and popularity in the robotics and engineering programs at our school.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}