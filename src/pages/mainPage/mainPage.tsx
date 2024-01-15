import { SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';

import MainTopComponent from '@/components/mainPageComponent/mainTopComponent/mainTopComponent';
import MainMiddleComponent from '@/components/mainPageComponent/mainMiddleComponent/mainMiddleComponent';
import MainBottom from '@/components/mainPageComponent/mainBottomComponent/mainBottomComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

import styles from './style';
import MainBottomComponent from '@/components/mainPageComponent/mainBottomComponent/mainBottomComponent';

const MainPage: React.FC = () => {
  return (
    // <styles.Container
    //   modules={[Pagination, Mousewheel]}
    //   direction={'vertical'}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   scrollbar={{ draggable: true }}
    //   mousewheel={true}
    // >
    //   {/* mainPage 화면 윗 부분 */}
    //   <SwiperSlide>
    //     <GroupBarComponent />
    //     <MainTopComponent />
    //   </SwiperSlide>

    //   {/* mainPage 화면 중간 부분 */}
    //   <SwiperSlide>
    //     <GroupBarComponent />
    //     <MainMiddleComponent />
    //   </SwiperSlide>

    //   {/* mainPage 화면 밑 부분 */}
    //   <SwiperSlide>
    //     <GroupBarComponent />
    //     <MainBottom />
    //   </SwiperSlide>
    // </styles.Container>

    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <GroupBarComponent />
      <MainTopComponent />
      <MainMiddleComponent />
      <MainBottomComponent />
    </div>
  );
};

export default MainPage;
