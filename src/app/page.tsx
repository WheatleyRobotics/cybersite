import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Achievements from '@/components/Achievements'
import RobotStatus from '@/components/RobotStatus'
import PhotoGallery from '@/components/PhotoGallery'
import SponsorLogos from '@/components/SponsorLogos'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Achievements />
      <RobotStatus />
      <PhotoGallery />
      <SponsorLogos />
      <Footer />
    </div>
  );
}
