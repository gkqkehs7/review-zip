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
        <styles.SuccessText to="/" />
        <styles.PrivacyPolicy>Privacy Policy</styles.PrivacyPolicy>
      </styles.Right>

      <styles.SignUp to="/">Sign Up</styles.SignUp>
    </styles.Container>
  );
};

export default LaptopComponent;
