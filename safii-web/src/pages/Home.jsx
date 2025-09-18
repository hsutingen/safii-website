import Hero from '../components/Hero';
import VideoSection from '../components/VideoSection';
import Features from '../components/Features';
import CTA from '../components/CTA';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Hero />
      <VideoSection />
      <Features />
      <CTA />
    </div>
  );
}

export default Home;