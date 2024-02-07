import MapComponent from '@/components/mapPageComponent/mapComponent/mapComponent';
import styles from './styles';

const MapPage: React.FC = () => {
  return (
    <styles.Container>
      <MapComponent width={80} height={80} />
    </styles.Container>
  );
};

export default MapPage;
