import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

type ImageSliderProps = {
  sliderImages: { id: number; url: string }[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ sliderImages }) => {
  return (
    <Swiper
      style={{ flex: 1, width: '100%', margin: '10px 0' }}
      modules={[Pagination, Navigation]}
      navigation={{ nextEl: '.swiper-button-next' }}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
    >
      {sliderImages.map((slideImage) => (
        <SwiperSlide
          key={slideImage.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
        >
          <img
            src={slideImage.url}
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
