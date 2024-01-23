import styled from 'styled-components';
import styles from './styles';

const LaptopComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.PerkyMilkyWay />
      <styles.LargeStart />
      <styles.PurpleCloud />
      <styles.Ellipse />
      <styles.MiniStart />
      <styles.Title />

      <styles.Right>
        <styles.SuccessIcon />
        <styles.SuccessSignin to="/mainPage" />
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default LaptopComponent;
