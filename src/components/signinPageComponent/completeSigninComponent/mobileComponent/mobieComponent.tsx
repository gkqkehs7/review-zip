import styled from 'styled-components';
import styles from './styles';

const MobileComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.Right>
        <styles.SuccessIcon />
        <styles.SuccessText to="/mainPage" />
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>
    </styles.Container>
  );
};

export default MobileComponent;
