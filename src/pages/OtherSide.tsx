import React from 'react';
import { HeroSection } from '../components/HeroSection_mos';
import  Cards from '../components/card-hover-effect-demo'

function MOS() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <HeroSection/>
      <Cards/>
    </div>
  );
}

export default MOS;