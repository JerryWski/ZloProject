import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import './IntroDailyWork.css';

const IntroDailyWork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      <h3 className='text-header'>Co robię na codzień?</h3>
      <p className='text'>
        Zajmuję się projektowaniem <span>strategii MARKETINGOWYCH</span> ,{' '}
        <span>strategii BRANDINGOWYCH</span> ( strategii marki ) oraz{' '}
        <span>strategii SPRZEDAŻOWYCH</span> dla firm i biznesu B2B, B2B2C i
        B2C.
      </p>
      <p className='text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis ipsum
        nisi soluta nostrum accusamus labore nam temporibus! Cupiditate
        laboriosam veniam quo unde inventore tenetur vel asperiores amet
        officia. Necessitatibus, cumque.
      </p>
    </div>
  );
};

export default IntroDailyWork;
