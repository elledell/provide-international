import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Programs from "../components/Programs";
import AboutUs from "../components/AboutUs";
import ImpactSection from "../components/ImpactSection"; 
import MotivationalSection from "../components/MotivationalSection";
import MediaSnippet from "../components/MediaSnippet";
import Footer from "../components/Footer";// Import the new section
import FindUs from "../components/FindUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-brandBlue-50 font-sans">
      <TopBar />
      <Navbar />
      <Hero />
      <Programs />
      <AboutUs />
      <ImpactSection /> 
      <MotivationalSection />
      <MediaSnippet />
      <FindUs />
      <Footer />  {/* Drop it in here! */}
    </div>
  );
}