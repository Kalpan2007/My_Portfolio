import React, { ReactNode } from 'react';

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({ 
  id, 
  className = '',
  children 
}) => {
  return (
    <section id={id} className={`${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};