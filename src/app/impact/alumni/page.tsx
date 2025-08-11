'use client'

import { ArrowLeft, GraduationCap, Briefcase, Building2, Heart, Wrench, DollarSign } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AlumniImpactPage() {
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
                Alumni Success
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our alumni continue to make lasting impacts in STEM fields worldwide, while remaining dedicated mentors and supporters of the CyberCats program.
              </p>
            </div>
          </div>
        </section>

        {/* Alumni Photo */}
        <section className="py-16 bg-gradient-to-b from-black to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="relative max-w-4xl mx-auto mb-12">
                <Image
                  src="/impact/alumni/2022_2023_alumni.jpeg"
                  alt="CyberCats 2022-2023 Alumni group photo in workshop"
                  width={1200}
                  height={600}
                  className="rounded-xl shadow-2xl border border-red-500/20"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* STEM Career Success */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 via-gray-900/50 to-gray-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-500">
                100% STEM Career Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Over the last 3 years, 100% of our alumni have pursued STEM careers, demonstrating the lasting impact of their robotics experience and the strong foundation they built as CyberCats.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-8 rounded-lg">
                <GraduationCap className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
                <div className="text-white text-lg mb-2">STEM Careers</div>
                <div className="text-gray-400 text-sm">All alumni in past 3 years</div>
              </div>

              <div className="text-center bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-8 rounded-lg">
                <Briefcase className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
                <div className="text-white text-lg mb-2">Years</div>
                <div className="text-gray-400 text-sm">Orics partnership</div>
              </div>

              <div className="text-center bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-8 rounded-lg">
                <Building2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <div className="text-4xl font-bold text-red-500 mb-2">Global</div>
                <div className="text-white text-lg mb-2">Reach</div>
                <div className="text-gray-400 text-sm">Alumni worldwide</div>
              </div>
            </div>
          </div>
        </section>

        {/* Continued Mentorship */}
        <section className="py-16 bg-gradient-to-b from-gray-900/40 via-gray-900/50 to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-8">
                  <Heart className="w-10 h-10 text-red-500 mr-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-red-500">
                    Ongoing Mentorship
                  </h2>
                </div>
                
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Year-Round Support</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    Given their dedication and experience, our alumni return every year to guide our team for the new season. Knowledge from beyond high school strengthens the entirety of the team. They continuously provide support and insight even when they are not with us.
                  </p>
                  <p className="text-gray-300 text-lg">
                    Even after graduating, our alumni mentor our growing team by sharing their insights throughout the season. They support subgroups like programming and mechanical by calling us during meetings and giving us their feedback.
                  </p>
                </div>

                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-6">Event Participation</h3>
                  <p className="text-gray-300 text-lg">
                    We&apos;ve proudly inspired hundreds of students and invite our alumni to return to FRC regionals and events as spectators and as mentors of our team. Their presence serves as inspiration for current members and demonstrates the lasting bonds formed through robotics.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-4">Remote Mentoring</h4>
                  <p className="text-gray-300">
                    Alumni join team meetings virtually to provide technical guidance and share industry insights
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-4">Subgroup Leadership</h4>
                  <p className="text-gray-300">
                    Specialized mentoring for programming, mechanical, and business subteams
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-4">Competition Support</h4>
                  <p className="text-gray-300">
                    Regular attendance at competitions as mentors and inspiration for current students
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-900/30 to-black border border-red-500/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-white mb-4">Knowledge Transfer</h4>
                  <p className="text-gray-300">
                    Sharing college and industry experience to strengthen team capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Orics Partnership */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 to-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <Wrench className="w-10 h-10 text-red-500 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-red-500">Orics Partnership</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A shining example of alumni giving back, Orics represents the entrepreneurial spirit and continued commitment of our graduates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Alumni-Founded Company</h3>
                <p className="text-gray-300 text-lg mb-6">
                  For the past 15 years, two of our alumni members have manufactured parts for our robot through Orics, an East Williston alumni-run company. This partnership demonstrates the long-term commitment our graduates have to supporting the next generation of CyberCats.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  Parts of our robot and game piece elements are donated to us every year by Orics, providing professional-grade manufacturing support that gives our team a competitive edge while teaching current students about industry-standard practices.
                </p>
                <p className="text-gray-300 text-lg">
                  This partnership serves as an inspiring example of how CyberCats alumni continue to have an everlasting impact on our team and the FIRST community, even years after graduation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg text-center">
                  <div className="text-5xl font-bold text-red-500 mb-2">15</div>
                  <div className="text-white text-xl mb-4">Years</div>
                  <div className="text-gray-300">
                    Of continuous partnership and support
                  </div>
                </div>

                <div className="bg-black/50 border border-red-500/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-3">Manufacturing Excellence</h4>
                  <p className="text-gray-300">
                    Professional-grade parts and game pieces manufactured to competition standards
                  </p>
                </div>

                <div className="bg-black/50 border border-red-500/20 p-6 rounded-lg">
                  <h4 className="text-xl font-bold text-red-500 mb-3">Local Impact</h4>
                  <p className="text-gray-300">
                    East Williston-based company supporting local STEM education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Support */}
        <section className="py-16 bg-gradient-to-b from-gray-900/20 via-gray-900/50 to-gray-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="w-10 h-10 text-red-500 mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-red-500">Financial Support</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Many of our alumni go above and beyond to remain a part of the FIRST community through generous financial contributions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Regional Competition Access</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Some alumni donate money to give us the opportunity for regionals, ensuring that financial constraints don&apos;t limit our competitive aspirations. Their support allows us to participate in events that might otherwise be out of reach.
                </p>
                <p className="text-gray-300 text-lg">
                  This financial backing demonstrates their belief in the program&apos;s value and their commitment to ensuring future students have the same transformative experiences they did.
                </p>
              </div>

              <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Resource Accessibility</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Others give us access to customized parts and specialized equipment, leveraging their professional networks and resources to benefit the team. This support often includes access to advanced manufacturing capabilities and industry-standard tools.
                </p>
                <p className="text-gray-300 text-lg">
                  These contributions help level the playing field, allowing our small team to compete with much larger, better-funded programs through the generosity of our alumni network.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Career Paths */}
        <section className="py-16 bg-gradient-to-b from-gray-900/30 to-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              Notable Alumni Career Paths
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-lg text-center">
                <Briefcase className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Engineering</h3>
                <p className="text-gray-300">
                  Mechanical, electrical, and software engineering roles at leading technology companies
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-lg text-center">
                <Building2 className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Entrepreneurship</h3>
                <p className="text-gray-300">
                  Founding successful companies like Orics and other STEM-focused businesses
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-lg text-center">
                <GraduationCap className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Advanced Education</h3>
                <p className="text-gray-300">
                  Pursuing graduate degrees at prestigious universities worldwide in STEM fields
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 leading-relaxed">
                Our alumni network spans the globe, with graduates working at top technology companies, leading research institutions, and founding innovative startups. Their diverse career paths demonstrate the versatility and strength of the foundation built through their CyberCats experience.
              </p>
            </div>
          </div>
        </section>

        {/* Alumni Network Impact */}
        <section className="py-16 bg-gradient-to-b from-gray-900/20 via-gray-900/50 to-red-900/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              Lasting Legacy
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Inspiring Current Students</h3>
                <p className="text-gray-300 text-lg mb-6">
                  The success of our alumni serves as powerful motivation for current team members, showing them concrete examples of where their robotics journey can lead. Seeing former teammates thriving in STEM careers reinforces the value of their current efforts and sacrifices.
                </p>
                <p className="text-gray-300 text-lg">
                  Alumni often return to share their experiences, providing mentorship not just in technical areas but also in career planning, college selection, and professional development.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Community Impact</h3>
                <p className="text-gray-300 text-lg mb-6">
                  Through their continued involvement, alumni help us maintain our high standards and ambitious goals despite being a small team. Their professional expertise allows us to tackle complex technical challenges and compete effectively against much larger programs.
                </p>
                <p className="text-gray-300 text-lg">
                  The alumni network has become an integral part of the CyberCats identity, proving that once a CyberCat, always a CyberCat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="py-16 bg-gradient-to-b from-red-900/10 via-red-900/20 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-500">
              Building Tomorrow&apos;s Leaders
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our alumni success stories are not just individual achievements - they represent the power of the CyberCats program to transform lives and create lasting positive impact in the world. Each graduate carries forward the values of innovation, teamwork, and service that define our team culture.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              As our alumni continue to excel in their careers and give back to the program, they ensure that the CyberCats legacy will continue to inspire and support future generations of STEM leaders, entrepreneurs, and innovators.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}