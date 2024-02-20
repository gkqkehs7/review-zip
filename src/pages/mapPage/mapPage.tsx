import MapComponent from '@/components/mapPageComponent/mapComponent/mapComponent';
import styles from './styles';
import { PlaceInfo } from '@/types/common.types';
import { useState } from 'react';

const MapPage: React.FC = () => {
  const [placeDataStroage, setplaceDataStroage] = useState<PlaceInfo[]>([]);

  return (
    <styles.Container>
      <MapComponent
        width={80}
        height={80}
        placeDataStroage={placeDataStroage}
        setplaceDataStroage={setplaceDataStroage}
      />
    </styles.Container>
  );
};

export default MapPage;
