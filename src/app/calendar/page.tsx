import Navbar from '@/components/Navbar'
import TeamCalendar from '@/components/CompetitionCalendar'
import Footer from '@/components/Footer'

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <TeamCalendar />
      <Footer />
    </div>
  );
}