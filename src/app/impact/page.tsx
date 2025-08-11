'use client'

import { ArrowRight, Users, Trophy, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-900/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-red-500">
                OUR IMPACT
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                People often wonder how a small team accomplishes so much. The Wheatley CyberCats work diligently with the resources we have to overcome every obstacle that comes our way.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gradient-to-b from-black via-gray-900/30 to-gray-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500">
                  Rising From Adversity
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  The pandemic deeply affected our team, causing its membership to drop to just six members. Since then, we have rebuilt our team to over 30 active members. It&apos;s truly incredible to see how our numbers have tripled since our rookie year in 2009.
                </p>
                <p className="text-gray-300 text-lg">
                  Together, we strive to expand and fund our team, as well as inspire the world around us.
                </p>
              </div>
              <div className="bg-black/50 border border-red-500/20 p-8 rounded-lg">
                <div className="text-6xl font-bold text-red-500 mb-2">500%</div>
                <div className="text-white text-xl mb-4">Team Growth</div>
                <div className="text-gray-300">
                  From 6 members during the pandemic to over 30 active members today
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diversity & Inclusion */}
        <section className="py-16 bg-gradient-to-b from-gray-900/50 via-gray-900/20 to-gray-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-500">
              Diversity & Inclusion
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-gray-900/30 p-8 rounded-lg border border-red-500/10">
                <div className="text-4xl font-bold text-red-500 mb-2">43%</div>
                <div className="text-white text-lg mb-2">Minority Groups</div>
                <div className="text-gray-400 text-sm">Our diverse community represents various backgrounds and ethnicities</div>
              </div>
              <div className="text-center bg-gray-900/30 p-8 rounded-lg border border-red-500/10">
                <div className="text-4xl font-bold text-red-500 mb-2">10%</div>
                <div className="text-white text-lg mb-2">LGBTQ+ Youth</div>
                <div className="text-gray-400 text-sm">Creating an inclusive environment for all team members</div>
              </div>
              <div className="text-center bg-gray-900/30 p-8 rounded-lg border border-red-500/10">
                <div className="text-4xl font-bold text-red-500 mb-2">10%</div>
                <div className="text-white text-lg mb-2">Female Members</div>
                <div className="text-gray-400 text-sm">Working to increase women STEM representation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Service */}
        <section className="py-16 bg-gradient-to-b from-gray-900/50 via-gray-900/30 to-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500">
                Community Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Within the last three years, members of the CyberCats have dedicated over 3000 hours to volunteering in our local communities and around the world.
              </p>
            </div>

            <div className="mb-12">
              <div className="relative max-w-4xl mx-auto">
                <Image
                  src="/impact/events/dosl.jpeg"
                  alt="CyberCats team beach cleanup volunteer work on Long Island shores"
                  width={1000}
                  height={500}
                  className="rounded-xl shadow-2xl border border-red-500/20"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              </div>
              <p className="text-center text-gray-300 text-lg mt-6 max-w-3xl mx-auto">
                As a team, we provide community service whether it&apos;s cleaning up local beaches or donating food to those in need. Every year, we dedicate nine hours to preserve, clean, and maintain the beaches on Long Island as they become increasingly polluted each year.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">3000+</div>
                <div className="text-white">Volunteer Hours</div>
                <div className="text-gray-400 text-sm">In the past 3 years</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">200+</div>
                <div className="text-white">Toys Collected</div>
                <div className="text-gray-400 text-sm">For Toys for Tots</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">30+</div>
                <div className="text-white">Garbage Bags</div>
                <div className="text-gray-400 text-sm">Beach cleanup efforts</div>
              </div>
              <div className="text-center p-6">
                <div className="text-3xl font-bold text-red-500 mb-2">50+</div>
                <div className="text-white">Hours Annually</div>
                <div className="text-gray-400 text-sm">Beach preservation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Main Sections */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
              Explore Our Impact Areas
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* FIRST Section */}
              <Link href="/impact/first" className="group">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-xl hover:border-red-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-lg mb-6 group-hover:bg-red-500/20 transition-colors">
                    <Trophy className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    FIRST Programs
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Discover how we&apos;ve spread FIRST&apos;s message through FRC, FTC, and FLL programs. From mentoring teams to starting new programs in our community.
                  </p>
                  <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                    <span className="font-mono text-sm">LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Events Section */}
              <Link href="/impact/events" className="group">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-xl hover:border-red-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-lg mb-6 group-hover:bg-red-500/20 transition-colors">
                    <Users className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    Community Events
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Explore our school-hosted events like Tech and Code Night, STEAM fair, and other community outreach programs that inspire future engineers.
                  </p>
                  <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                    <span className="font-mono text-sm">LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>

              {/* Alumni Section */}
              <Link href="/impact/alumni" className="group">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-red-500/20 p-8 rounded-xl hover:border-red-500/50 transition-all duration-300 h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-lg mb-6 group-hover:bg-red-500/20 transition-colors">
                    <GraduationCap className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                    Alumni Success
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Meet our notable alumni who continue to make an impact in STEM fields, from engineering to technology leadership roles worldwide.
                  </p>
                  <div className="flex items-center text-red-500 group-hover:text-red-400 transition-colors">
                    <span className="font-mono text-sm">LEARN MORE</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gradient-to-b from-gray-900/20 via-red-900/10 to-black">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-500">
              More Than Just a Team
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The CyberCats have proven that dedication, perseverance, and teamwork can overcome any challenge. As we continue to push the boundaries of what a small team can achieve, we remain driven by our passion for robotics, volunteer work, and inspiring others. We are more than just a team— we are a family striving to inspire future generations to leave a lasting legacy in the world.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}