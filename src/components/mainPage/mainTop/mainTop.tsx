import { Container } from './style';
import mainTopBackgroundImage from '../../../../public/images/mainPage/mainTopBackground.png';

const MainTop: React.FC = () => {
  return (
    <Container
      style={{ backgroundImage: `url(${mainTopBackgroundImage})` }}
    ></Container>
  );
};

export default MainTop;
