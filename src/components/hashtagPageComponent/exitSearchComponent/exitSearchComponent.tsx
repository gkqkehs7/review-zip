import styles from './style';
import { Link, useNavigate } from 'react-router-dom';
const ExitSearchComponent = () => {
  const navigate = useNavigate();
  return (
    <styles.ExitSearchContainer>
      <Link to="/searchPage">
        <styles.SearchIcon />
      </Link>
      <styles.ExitButton
        onClick={() => {
          navigate(-1);
        }}
      />
    </styles.ExitSearchContainer>
  );
};

export default ExitSearchComponent;
