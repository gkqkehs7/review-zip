import MapComponent from '@/components/mapPageComponent/mapComponent/mapComponent';
import styles from './styles';
import GroupBarComponent from '@/components/common/groupBarComponent/groupBarComponent';
import { useMediaQuery } from 'react-responsive';

const MapPage: React.FC = () => {
  const isDesktop: boolean = useMediaQuery({
    query: '(min-width : 1681px)',
  });
  const isLaptop: boolean = useMediaQuery({
    //ipad와 pc사이
    query: '(min-width : 1201px) and (max-width : 1680px)', //1921의 다자인 적용
  });

  const isMobile: boolean = useMediaQuery({
    query: '(max-width : 1200px)',
  });

  return (
    <styles.Container>
      <GroupBarComponent direction="col" color="white" />
      <MapComponent />
    </styles.Container>
  );
};

export default MapPage;
