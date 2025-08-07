import Navbar from '@/components/Navbar'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}