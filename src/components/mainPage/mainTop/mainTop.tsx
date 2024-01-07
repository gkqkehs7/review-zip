import { Container } from './style';
import mainTopImage from '../../../../public/images/mainPage/mainTopBackground.png';

const MainTop: React.FC = () => {
  return (
    <Container style={{ backgroundImage: `url(${mainTopImage})` }}></Container>
  );
};

export default MainTop;
