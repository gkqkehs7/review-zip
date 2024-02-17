import MapComponent from '@/components/mapPageComponent/mapComponent/mapComponent';
import styles from './styles';

const MapPage: React.FC = () => {
  return (
    <styles.Container>
      <MapComponent width={100} height={100} />
    </styles.Container>
  );
};

export default MapPage;
