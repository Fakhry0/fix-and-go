import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import MarketAnalysisSection from '../components/sections/MarketAnalysisSection';
import BusinessModelSection from '../components/sections/BusinessModelSection';
import ProjectionsSection from '../components/sections/ProjectionsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MarketAnalysisSection />
        <BusinessModelSection />
        <ProjectionsSection />
      </main>
      <Footer />
    </>
  );
}
