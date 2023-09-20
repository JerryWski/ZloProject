import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { clients } from '../clientList';

const SwiperModule = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className='mySwiper'
    >
        {clients.map((client) => (
      <SwiperSlide>
          <div className='swiper-container' key={client.id}>
            <p className='swiper-text'>{client.text}</p>
            <div className='image-wrapper'>
              <img src={client.image} alt="" />
            </div>
            <h2 className='swiper-header'>{client.header}</h2>
            <h3 className='swiper-subheader'>{client.subheader}</h3>
          </div>
      </SwiperSlide>
        ))}
      {/* <SwiperSlide>
        <p>
          "Pełny profesjonalizm, duże zaangażowanie, znajomość marketingu i
          ogromne doświadczenie - to tylko niektóre cechy, które posiada Maciej
          Martowicz. Z całego serca polecam współpracę z tym człowiekiem - on
          wie, co robi i każda chwila spędzona z nim wzbogaci Cię o rok studiów
          !"
        </p>
        <div>
          <img src='' alt='' />
        </div>
        <h2>Andrzej Makarenko</h2>
        <h3>CEO & Founder Szkoła Językowa Speech Language Studio</h3>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
      <SwiperSlide>Slide 10</SwiperSlide>
      <SwiperSlide>Slide 11</SwiperSlide>
      <SwiperSlide>Slide 12</SwiperSlide> */}
    </Swiper>
  );
};

export default SwiperModule;
