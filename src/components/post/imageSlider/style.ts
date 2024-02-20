import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

const styles = {
  Container: styled(Swiper)`
    flex: 1;
    width: 100%;
    margin: 10px 0;
  `,

  ImageContainer: styled(SwiperSlide)`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  `,

  Image: styled.img`
    width: 100%;
    object-fit: cover;
  `,
};

export default styles;
