import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchBarProps, SearchTypeProps } from './searchPage';
//margin과 padding은 5의 배수로
//일단 vw,vh로 하고 max-width,max-height 설정해주기

const styles = {
  Container: styled.div`
    // 화면 전체 사용하게
    width: 100vw;
    max-width: 1920px;
    height: 100vh;
    max-height: 1096px;
    display: flex;
    align-items: center;
    background-image: url('images/searchPage/SearchBackground.png');
    background-repeat: no-repeat;
    background-size: cover;
  `,
  // 검색창 컴포넌트
  SearchBar: styled.input<SearchBarProps>`
    &::placeholder {
      color: black;
    }
    width: 70vw;
    max-width: 1340px;
    height: 10vh;
    max-height: 84px;
    font-size: 20px;
    border: None;
    border-radius: 30.5px;
    background-color: ${(props) =>
      props.isFocused
        ? 'rgba(255, 255, 255, 0.4)'
        : 'rgba(255, 255, 255, 0.6)'}; // 포커스시에 투명도 변화 흰색 배경에 투명도 60%
    background-size: cover;
    color: black;
    box-shadow: ${(props) =>
      props.isFocused
        ? '0'
        : '0px 4px 8px rgba(0, 0, 0, 0.3)'}; //포커스가 되면 그림자
    padding-left: 96px;
    outline: none;
    &:focus {
      border-radius: 30.5px 30.5px 0 0;
    }
  `,
  // 검색창이 포커스 된 경우 나타날 검색창 확장 영역 컴포넌트
  SearchBarExtends: styled.div`
    height: 70vh;
    max-height: 736px;
    font-size: 20px;
    border: none;
    background-color: rgba(255, 255, 255, 0.4); // 흰색 배경에 투명도 60%
    background-size: cover;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 100;
    border-radius: 0 0 30.5px 30.5px;
    overflow: hidden; //요소가 많은 경우 안보이게 함
  `,
  //검색창과 검색창 확장 영역을 감쌀 컨테이너
  SearchBarContainer: styled.div`
    position: absolute;
    top: 13vh;
    left: 50%; // 왼쪽에서 50% 위치에 배치
    transform: translateX(-50%); // X축으로 -50% 만큼 이동하여 중앙 정렬
  `,
  // 검색창 안에 위치한 돋보기
  Search: styled.div`
    width: 26.96px;
    height: 26.96px;
    background-image: url('images/searchPage/Search.png');
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    margin: 25px;
    display: flex;
    align-items: center;
  `,
  //searchInput값에 입력이 생기면 나타날 컴포넌트 :리뷰잉과 태그를 표현할 때 사용
  SearchType: styled.span<SearchTypeProps>`
    color: black;
    border-bottom: ${(props) => (props.isBorder ? 'solid black' : 'none')};
    padding: 0 230px 0 230px;
  `,
  //위의 컴포넌트를 감싸 확장 영역의 맨 위에 표시될 컨테이너
  Top: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,
  //검색 기록에 뜰 데이터(searchHistory)나 유저의 입력에 따라 필터가 된 데이터( filteredData)들을 감쌀 컨테이너 hr태그를 따로 사용안하고 아래쪽만 border처리
  HistoryContainer: styled.div`
    margin: 28.8px 0 28.8px 0;
    border-bottom: 1px solid white;
  `,

  //hashtag 데이터 옆에 뜰 이미지- 모서리 깎인 사각형
  Hashtag: styled.img`
    border-radius: 10px;
    width: 2vw;
    height: 4vh;
    max-width: 47px;
    max-height: 47px;
    margin: 0 40px 0 40px;
    position: relative;
    bottom: 1vh;
  `,
  //username 옆에 뜰 이미지 - 원
  UserName: styled.img`
    border-radius: 50px;
    width: 2vw;
    height: 4vh;
    max-width: 56px;
    max-height: 53px;
    margin: 0 40px 0 40px;
    position: relative;
    bottom: 1vh;
  `,
  //위의 이미지 옆에 표시될 내용 username이나 hashtag
  Content: styled.span`
    color: black;
    font-size: 20px;
    position: relative;
    bottom: 2vh;
  `,
  //유저가 찾는 데이터가 username인 경우 옆에 표시될 친구 추가 아이콘
  PlusFriend: styled(Link)`
    position: relative;
    right: 50px;
    bottom: 2vh;
    width: 1.2vw;
    height: 2vh;
    max-width: 23px;
    max-height: 3px;
    z-index: 100;
    cursor: pointer;
    background-image: url('images/searchPage/PlusFriend.png');
    background-size: cover;
    background-position: center;
  `,
  //유저가 찾는 데이터가 hashtag인 경우 표시될 리뷰 보기 버튼
  SeeReview: styled(Link)`
    position: relative;
    width: 3vw;
    height: 4vh;
    padding: 5px;
    z-index: 3;
    left: 50vw;
    font-size: 15px;
    color: black;
    bottom: 2vh;
    cursor: pointer;
    background-color: white;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
  `,
  //검색어 입력이 있기 전에 검색 기록뜨는 화면_ 삭제 버튼
  DeleteButton: styled.button`
    background: #a087bf;
    color: black;
    font-size: 1em;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    position: absolute;
    bottom: 4vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  `,
};
export default styles;
