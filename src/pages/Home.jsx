import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
    <div>
      
        <HeroSection />
      
      <div data-aos="fade-right">
        <AboutUs />
      </div>
      <div data-aos="fade-left">
        <Services />
      </div>
      <div data-aos="zoom-in">
        <Testimonials />
      </div>
      <div data-aos="fade-up">
        <ContactUs />
      </div>
    </div>
    
  );
}

export default Home;
