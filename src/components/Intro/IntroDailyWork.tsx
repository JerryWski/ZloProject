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
        Wyciągam z czarnej dupy firmy małe, bardzo duże, średnie i – ale to
        wtedy kiedy tam się znalazły .Innym pomagam złapać najlepszą falę kiedy
        już surfują ale …nie wiedzą co trzeba zrobić dalej żeby złapać tą
        Najlepszą Falę i wyprzedzić pozostałych o kilka długości deski.
      </p>
      <h3 className='text-header'>Na czym się ZUOwybitnie znam :</h3>
      <p className='text'>
        Moje umiejętności obejmują opracowywanie strategii marketingu, brandingu
        i komunikacji B2B, które pomagają firmom budować silne i rozpoznawalne
        marki. Dodatkowo, specjalizuję się w strategiach sprzedaży, w tym social
        selling, który jest niezwykle skutecznym narzędziem w dzisiejszym
        świecie biznesu.
      </p>
    </div>
  );
};

export default IntroDailyWork;
