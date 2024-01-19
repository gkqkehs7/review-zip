import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import styles from './style';

type ImageSliderComponentProps = {
  sliderImages: { id: number; url: string }[];
};

const ImageSliderComponent: React.FC<ImageSliderComponentProps> = ({
  sliderImages,
}) => {
  return (
    <styles.Container
      style={{
        //@ts-ignore
        '--swiper-pagination-color': 'white',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '1',
      }}
      modules={[Pagination, Navigation, Autoplay]}
      rewind={true}
      pagination={{
        clickable: true,
      }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000 }}
    >
      {sliderImages.map((slideImage) => (
        <styles.ImageContainer
          key={slideImage.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
        >
          <styles.Image
            src={slideImage.url}
            style={{
              objectFit: 'cover',
              width: '100%',
            }}
          />
        </styles.ImageContainer>
      ))}
    </styles.Container>
  );
};

export default ImageSliderComponent;
