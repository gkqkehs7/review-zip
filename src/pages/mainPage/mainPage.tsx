import { SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { Container } from './style';

import MainTop from '../../components/mainTop/mainTop';
import MainMiddle from '../../components/mainMiddle/mainMiddle';
import MainBottom from '../../components/mainBottom/mainBottom';

export default function App() {
  return (
    <Container
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Mousewheel]}
      scrollbar={{ draggable: true }}
    >
      {/* mainPage 화면 윗 부분 */}
      <SwiperSlide>
        <MainTop />
      </SwiperSlide>

      {/* mainPage 화면 중간 부분 */}
      <SwiperSlide>
        <MainMiddle />
      </SwiperSlide>

      {/* mainPage 화면 밑 부분 */}
      <SwiperSlide>
        <MainBottom />
      </SwiperSlide>
    </Container>
  );
}
