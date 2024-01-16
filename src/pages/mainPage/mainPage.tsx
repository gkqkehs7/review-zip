import { SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';
import { useCallback, useEffect, useState } from 'react';

import MainTopComponent from '@/components/mainPageComponent/mainTopComponent/mainTopComponent';
import MainMiddleComponent from '@/components/mainPageComponent/mainMiddleComponent/mainMiddleComponent';
import MainBottomComponent from '@/components/mainPageComponent/mainBottomComponent/mainBottomComponent';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';

import styles from './style';

const MainPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const modalOpen = useCallback(() => {
    setOpenModal(true);
  }, [openModal]);

  const modalClose = useCallback(() => {
    setOpenModal(false);
  }, [openModal]);

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

    <styles.Container>
      <GroupBarComponent />
      <MainTopComponent openModal={openModal} />
      <MainMiddleComponent modalOpen={modalOpen} modalClose={modalClose} />
      <MainBottomComponent modalOpen={modalOpen} modalClose={modalClose} />
    </styles.Container>
  );
};

export default MainPage;
