import styles from './style';
import MainLogo from '/images/myProfilePage/MainLogoImage.png';

const LogoComponent = () => {
  return (
    <styles.MainLogoContainer>
      <styles.MainLogoImage src={MainLogo} />
    </styles.MainLogoContainer>
  );
};

export default LogoComponent;
