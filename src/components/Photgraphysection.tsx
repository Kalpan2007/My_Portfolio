import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Eye } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import { SectionHeading } from './SectionHeading';
import img01 from '../assets/GAMING.jpg';

const photos = [
  {
    id: 1,
    url: img01,
    title: 'Immersed in Gaming',
    caption: 'Capturing the intense focus and passion during a thrilling gaming session.',
  },
  {
    id: 2,
    url: '',
    title: 'Natural Symmetry',
    caption: 'The perfect balance of nature',
  },
  {
    id: 3,
    url: '',
    title: 'Light & Shadow',
    caption: 'Playing with contrast and light',
  },
  {
    id: 4,
    url: '',
    title: 'Minimalist',
    caption: 'Less is more',
  },
  {
    id: 5,
    url: '',
    title: 'Color Study',
    caption: 'Exploring the spectrum',
  },
  {
    id: 6,
    url: '',
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
        {photos.slice(0, 6).map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div 
              className={`bg-white p-2 shadow-lg transform transition-transform duration-500 rounded-md
                ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} 
                group-hover:rotate-0 relative scale-75`}
            >
              {/* Image Container with 9:16 aspect ratio */}
              <div className="relative overflow-hidden rounded-sm" style={{ paddingTop: '177.78%' }}>
                <img 
                  src={photo.url} 
                  alt={photo.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500" 
                  loading="lazy"
                />
              </div>

              {/* Overlay for Title and Caption */}
              <div className="absolute inset-0 bg-black/30 flex items-end p-2">
                <div>
                  <h3 className="text-white text-lg font-medium">{photo.title}</h3>
                  <p className="text-gray-300 text-sm">{photo.caption}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};