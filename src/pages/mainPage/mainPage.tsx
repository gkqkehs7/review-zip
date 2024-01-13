import { SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import styles from './style';

import MainTop from '../../components/mainPage/mainTop/mainTop';
import MainMiddle from '../../components/mainPage/mainMiddle/mainMiddle';
import MainBottom from '../../components/mainPage/mainBottom/mainBottom';
import GroupBarComponent from '../../components/common/GroupBar/groupBar';

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
        <GroupBarComponent />
        <MainTop />
      </SwiperSlide>

      {/* mainPage 화면 중간 부분 */}
      <SwiperSlide>
        <GroupBarComponent />
        <MainMiddle />
      </SwiperSlide>

      {/* mainPage 화면 밑 부분 */}
      <SwiperSlide>
        <GroupBarComponent />
        <MainBottom />
      </SwiperSlide>
    </styles.Container>

    // <div style={{ overflow: 'hidden', position: 'relative' }}>
    //   <GroupBarComponent />
    //   <MainTop />
    //   <MainMiddle />
    //   <MainBottom />
    // </div>
  );
};

export default MainPage;
