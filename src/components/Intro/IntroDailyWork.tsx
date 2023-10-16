import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import './IntroDailyWork.css';

const IntroDailyWork = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className='intro'
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {/* <h3 className='text-header'>Co ZUOrobię na codzień?</h3>
      <p className='text'>
        Wyciągam z czarnej dupy firmy małe, bardzo duże, średnie i – ale to
        wtedy kiedy tam się znalazły .Innym pomagam złapać najlepszą falę kiedy
        już surfują ale …nie wiedzą co trzeba zrobić dalej żeby złapać tą
        Najlepszą Falę i wyprzedzić pozostałych o kilka długości deski.
      </p> */}
      <h3 className='text-header'>Na czym się ZUOwybitnie znam?</h3>
      <p className='text'>
        Moje umiejętności obejmują opracowywanie strategii marketingu, brandingu
        i komunikacji B2B, które pomagają firmom budować silne i rozpoznawalne
        marki. Dodatkowo, specjalizuję się w Social Media Marketing, w tym
        Social Selling, Emplyer Branding i nie tylko!
      </p>
      <p className='text'>
        Jeśli chodzi o platformę LinkedIn, specjalizuję się w social sellingu i
        employee advocacy dla firm B2B. Pomagam firmom wykorzystać potencjał
        LinkedIn do zwiększenia sprzedaży i budowania silnego employer
        brandingu.
      </p>
    </div>
  );
};

export default IntroDailyWork;
