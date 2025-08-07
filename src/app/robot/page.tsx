import Navbar from '@/components/Navbar'
import PreviousRobots from '@/components/PreviousRobots'
import Footer from '@/components/Footer'

export default function RobotPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <PreviousRobots />
      <Footer />
    </div>
  );
}