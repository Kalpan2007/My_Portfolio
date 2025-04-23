import React from 'react';
import { HeroSection } from '../components/HeroSection_mos';
import  Cards from '../components/card-hover-effect-demo'
import { PhotographySection } from '../components/Photgraphysection';


function MOS() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <HeroSection/>
      <Cards/>
      <PhotographySection/>
    </div>
  );
}

export default MOS;