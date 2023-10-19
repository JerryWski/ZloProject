import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { clients } from '../../clientList';

const SwiperModule = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className='mySwiper'
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <div className='swiper-container'>
            <div className='img-wrapper'>
              <img src={client.image} alt='man-photo' />
            </div>
            <h2 className='swiper-header'>{client.header}</h2>
            <h3 className='swiper-subheader'>{client.subheader}</h3>
            <p className='swiper-text'>{client.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperModule;
