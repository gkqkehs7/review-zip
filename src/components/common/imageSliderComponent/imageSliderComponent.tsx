import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { PostImages } from '@/types/common.types';
import styles from './style';

type ImageSliderComponentProps = {
  sliderImages: PostImages[];
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
          key={slideImage.imageId}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
        >
          <styles.Image
            src={slideImage.imageUrl}
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
