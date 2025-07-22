import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import OurServices from './components/OutServices';
import ProcessSection from './components/ProcessSection';
import OutPrograms from './components/ProgramsSection';
import './styles.css'

export default function HomePage() {
  return (
    <div className='d-flex flex-column'>
      <HeroSection />
      <div className="px-2">
        <AboutUsSection />
        <OurServices />
        <ProcessSection />
        <OutPrograms />
      </div>
    </div>
  );
}