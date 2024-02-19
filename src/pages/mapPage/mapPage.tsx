import MapComponent from '@/components/mapPageComponent/mapComponent/mapComponent';
import styles from './styles';

import { useState } from 'react';

export interface PlaceInfo {
  place_name: string;
  address_name: string;
  road_address_name: string;
  phone: string;
  x: string;
  y: string;
}

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
