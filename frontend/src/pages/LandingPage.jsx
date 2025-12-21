import FrontSection from "../components/landing/FrontSection";
import AboutSection from "../components/landing/AboutSection";
import ServicesSection from "../components/landing/ServicesSection";
import Footer from './../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="">
      <FrontSection />
      <AboutSection />
      <ServicesSection />
      <Footer/>
    </div>
  );
}
