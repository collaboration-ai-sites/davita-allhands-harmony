
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AgendaTimeline from '@/components/AgendaTimeline';
import LocationInfo from '@/components/LocationInfo';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <AgendaTimeline />
        <LocationInfo />
        <Registration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
