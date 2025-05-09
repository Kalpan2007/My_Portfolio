import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Eye, Home } from 'lucide-react';
import { SectionContainer } from './SectionContainer';
import { SectionHeading } from './SectionHeading';
import img01 from '../assets/Img01.jpg';
import img02 from '../assets/Img02.jpg';
import img03 from '../assets/Img03.jpg';
import img04 from '../assets/Img04.jpg';
import img05 from '../assets/Img05.jpg';
import img06 from '../assets/Img06.jpg';
import { useNavigate } from 'react-router-dom';

const photos = [
  {
    id: 1,
    url: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993847/Img01-DIwVqjA0_to5w1q.jpg',
    title: 'Immersed in Gaming',
    caption: 'Capturing the intense focus and passion during a thrilling gaming session.',
  },
  {
    id: 2,
    url: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993848/Img02-m7BGro5J_kxk9dl.jpg',
    title: 'More Than a Game',
    caption: 'Professional by mindset, legendary by heart — this is where true greatness plays silently but leaves echoes forever.',
  },
  {
    id: 3,
    url: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993850/Img03-BrNzSriJ_jhdfna.jpg',
    title: 'Standing Strong',
    caption: 'Captured this beautiful bird by the water. Calm, steady, and full of life.'
  },
  
  {
    id: 4,
    url: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993848/Img04-BR0ZSUhX_qgrqoq.jpg',
    title: 'Calm Shores',
    caption: 'A bright day at the seashore — soft waves, blue skies, camel rides, and simple moments by the water.'
  },
  
  {
    id: 5,
    url: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993847/Img05-DJcBPaJ3_shijak.jpg',
    title: 'Endless Skies',
    caption: 'The sky reminds us — there are no limits, only dreams waiting to fly.'
  }
  ,
  {
    id: 6,
    url: 'https://res.cloudinary.com/dxdrzit6x/image/upload/v1745993848/Img06-Br6LNj62_pn7h1a.jpg',
    title: 'Morning Magic',
    caption: 'Mornings like this — when the sun slowly rises, painting the sky with golden dreams. A peaceful start, a cool vibe.'
  }
  ,
];

export const PhotographySection: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <SectionContainer id="photography" className="py-16 md:py-24 relative">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 mb-20">
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

              {/* Overlay for Title and Caption at Bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-black/40 p-2">
                <div className="text-center text-white drop-shadow-md">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{photo.title}</h3>
                  <p className="text-xs sm:text-sm">{photo.caption}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};