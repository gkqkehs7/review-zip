import styles from './styles';

const LocationSearchComponent: React.FC = () => {
  return (
    <>
      <styles.Container>
        <styles.Top />
        <styles.SearchBarForm>
          <styles.SearchIcon src="images/mapPage/Search.png" />
          <styles.SearchBar
            type="text"
            placeholder="장소,버스.지하철,도로검색"
            id="keyword"
          />
        </styles.SearchBarForm>

        <styles.PlaceList></styles.PlaceList>
        <styles.Stars />
      </styles.Container>
    </>
  );
};

export default LocationSearchComponent;
