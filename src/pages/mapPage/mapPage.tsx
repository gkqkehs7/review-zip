import LocationSearchComponent from '@/components/mapPageComponent/locationSearchComponent/loactionSearchComponent';
import MapComponent from '@/components/mapPageComponent/mapComponent/mapComponent';
import styles from './styles';

const MapPage: React.FC = () => {
  return (
    <styles.Container>
      <MapComponent />
    </styles.Container>
  );
};

export default MapPage;
