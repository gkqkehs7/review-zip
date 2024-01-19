import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';

const styles = {
  Container: styled(Swiper)`
    flex: 1;
    width: 100%;
    margin: 10px 0;
    position: relative;
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

  NextButton: styled.img`
    width: 25px;
    height: 25px;

    position: absolute;
    top: 50%;
    right: 0;

    z-index: 9;
  `,
};

export default styles;
