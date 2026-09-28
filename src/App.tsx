import Loader from '@/components/Loader';
import ErrorBoundary from '@/components/ErrorBoundary';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SearchSection from '@/components/SearchSection';
import FeaturedProperties from '@/components/FeaturedProperties';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProjectShowcase from '@/components/ProjectShowcase';
import VideoGallery from '@/components/VideoGallery';
import Testimonials from '@/components/Testimonials';
import EMICalculator from '@/components/EMICalculator';
import WhyInvestNow from '@/components/WhyInvestNow';
import AboutJai from '@/components/AboutJai';
import InstagramFeed from '@/components/InstagramFeed';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

function App() {
  return (
    <ErrorBoundary>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <SearchSection />
        <FeaturedProperties />
        <Services />
        <WhyChooseUs />
        <ProjectShowcase />
        <VideoGallery />
        <Testimonials />
        <EMICalculator />
        <WhyInvestNow />
        <AboutJai />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </ErrorBoundary>
  );
}

export default App;
