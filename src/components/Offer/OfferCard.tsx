import './OfferCard.css';
import { useScroll, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const OfferCard: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '.53 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0,1], [.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0,1], [.6, 1]);
  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className='offer-container'
    >
      <div className='offer'>
        <a className='offer-link' href='/offers'>
          <div className='image-container'>
            <img
              className='offer-img'
              src='/strategy_big.png'
              alt='work-icon'
            />
          </div>
          <h3 className='offer-heading'>zuoStrategie</h3>
          <p className='offer-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            consequuntur quam doloremque
          </p>
        </a>
      </div>
      <div className='offer'>
        <a className='offer-link' href='/offers'>
          <div className='image-container'>
            <img className='offer-img' src='/social2_big.png' alt='work-icon' />
          </div>
          <h3 className='offer-heading'>zuoSzkolenia</h3>
          <p className='offer-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            consequuntur quam doloremque
          </p>
        </a>
      </div>
      <div className='offer'>
        <a className='offer-link' href='/offers'>
          <div className='image-container'>
            <img
              className='offer-img'
              src='/company-struct-big.png'
              alt='work-icon'
            />
          </div>
          <h3 className='offer-heading'>zuoWarsztaty</h3>
          <p className='offer-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            consequuntur quam doloremque
          </p>
        </a>
      </div>
      <div className='offer'>
        <a className='offer-link' href='/offers'>
          <div className='image-container'>
            <img
              className='offer-img'
              src='/mark-sales-big.png'
              alt='work-icon'
            />
          </div>
          <h3 className='offer-heading'>zuoAudyty</h3>
          <p className='offer-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            consequuntur quam doloremque
          </p>
        </a>
      </div>
      <div className='offer'>
        <a className='offer-link' href='/offers'>
          <div className='image-container'>
            <img
              className='offer-img'
              src='/managers-big.png'
              alt='work-icon'
            />
          </div>
          <h3 className='offer-heading'>zuoRekrutacja</h3>
          <p className='offer-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            consequuntur quam doloremque
          </p>
        </a>
      </div>
    </motion.div >
  );
};

export default OfferCard;
