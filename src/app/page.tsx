import 'bootstrap/dist/css/bootstrap.css';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import OurServices from './components/OutServices';
import ProcessSection from './components/ProcessSection';
import OutPrograms from './components/ProgramsSection';

export default function Home() {
  return (
    <div className='d-flex flex-column'>
      <HeroSection />
      <AboutUsSection />
      <OurServices />
      <ProcessSection />
      <OutPrograms />
    </div>
  );
}
