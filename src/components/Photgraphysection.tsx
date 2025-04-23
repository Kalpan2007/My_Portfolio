import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Eye } from 'lucide-react';

import { SectionContainer } from './SectionContainer';
import { SectionHeading } from './SectionHeading';

const photos = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg',
    title: 'Urban Geometry',
    caption: 'Finding patterns in the city chaos',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg',
    title: 'Natural Symmetry',
    caption: 'The perfect balance of nature',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg',
    title: 'Light & Shadow',
    caption: 'Playing with contrast and light',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg',
    title: 'Minimalist',
    caption: 'Less is more',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg',
    title: 'Color Study',
    caption: 'Exploring the spectrum',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg',
    title: 'Portraiture',
    caption: 'Capturing authentic moments',
  },
];

export const PhotographySection: React.FC = () => {
  return (
    <SectionContainer id="photography" className="bg-gradient-to-b from-gray-900 to-photo-dark py-16 md:py-24">
      <SectionHeading 
        title="Photography Collection" 
        icon={<Camera className="w-8 h-8 text-photo-default" />} 
      />
      
      <div className="mt-8 text-center px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <div className="h-[1px] bg-gray-700 w-16"></div>
            <p className="px-4 text-photo-light italic">
              "Photography is the story I fail to put into words"
            </p>
            <div className="h-[1px] bg-gray-700 w-16"></div>
          </div>
          <p className="text-gray-300">
            Through my lens, I capture moments that words cannot express. Each photo represents
            a unique perspective, a fleeting emotion, or a beautiful accident that I managed to freeze in time.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div 
              className={`bg-white p-3 shadow-lg transform transition-transform duration-500 rounded-md
                ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
                group-hover:rotate-0 relative`}
            >
              <div className="overflow-hidden rounded-sm">
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="w-full h-60 object-cover filter grayscale group-hover:filter-none transition-all duration-500" 
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md flex items-end p-6">
                <div>
                  <h3 className="text-white text-lg font-medium">{photo.title}</h3>
                  <p className="text-gray-300 text-sm">{photo.caption}</p>
                </div>
              </div>
              
              <div className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Eye className="w-4 h-4 text-gray-800" />
              </div>
              
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-white z-10 flex items-center justify-center transform translate-y-2 translate-x-1">
                <ImageIcon className="w-4 h-4 text-photo-dark" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <a 
          href="#" 
          className="inline-flex items-center text-photo-light hover:text-white transition-colors"
        >
          <Camera className="w-5 h-5 mr-2" />
          View Full Gallery
        </a>
      </motion.div>
    </SectionContainer>
  );
};