import Navbar from '@/components/Navbar'
import About from '@/components/About'
import TeamRoster from '@/components/TeamRoster'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <About />
      <TeamRoster />
      <Footer />
    </div>
  );
}