import { HeroSection } from '../components/HeroSection_mos';
import  Cards from '../components/card-hover-effect-demo'
import { PhotographySection } from '../components/Photgraphysection';
import { BottomNav } from '../components/BottomNav';
import PageTransition from '../components/PageTransition';


function MOS() {
  return (
    <PageTransition>
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <HeroSection/>
      <Cards/>
      <PhotographySection/>
      <BottomNav/>
    </div>
    </PageTransition>
  );
}

export default MOS;