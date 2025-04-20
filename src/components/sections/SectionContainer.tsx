import { ReactNode } from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
  alternate?: boolean;
}

export default function SectionContainer({ id, className = '', children, alternate = false }: SectionContainerProps) {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${alternate ? 'bg-light-gray' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
}