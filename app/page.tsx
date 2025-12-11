import Hero from "../components/Hero";
import AboutCompany from "../components/AboutCompany";
import ServicesSection from "../components/ServicesSection";
import Industries from "../components/Industries";
import Testimonials from "../components/Testimonials";
import PortfolioSlider from "../components/PortfolioSlider";
import ProcessSection from "../components/ProcessSection";
import CommunitySection from "../components/CommunitySection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutCompany />
      <ServicesSection />
      <Industries />
      <PortfolioSlider />
      <ProcessSection />
      <CommunitySection />
      <Testimonials />
    </div>
  );
}
