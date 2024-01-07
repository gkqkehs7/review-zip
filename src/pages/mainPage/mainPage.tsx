import { SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import styles from './style';

import MainTop from '../../components/mainPage/mainTop/mainTop';
import MainMiddle from '../../components/mainPage/mainMiddle/mainMiddle';
import MainBottom from '../../components/mainPage/mainBottom/mainBottom';

const MainPage: React.FC = () => {
  return (
    <styles.Container
      modules={[Pagination, Mousewheel]}
      direction={'vertical'}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      mousewheel={true}
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
    </styles.Container>
  );
};

export default MainPage;
