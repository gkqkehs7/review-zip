import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchTypeProps } from './searchPage';
//margin과 padding은 5의 배수로
//일단 vw,vh로 하고 max-width,max-height 설정해주기
// 작업 별로 없을 때 commit할 때는 WIP로
const styles = {
  Container: styled.div`
    // 화면 전체 사용하게
    background-image: url('images/searchPage/SearchBackgroundImage.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    width: 100vw;
    max-width: 1920px;
    height: 100vh;
    max-height: 1096px;
  `,
  // 검색창이 포커스 된 경우 나타날 검색창 확장 영역 컴포넌트
  SearchBarExtends: styled.div`
    position: relative;
    top: 15vh;
    background-color: rgba(255, 255, 255, 0.4);
    background-size: cover;
    width: 70vw;
    height: 70vh;
    max-height: 736px;
    font-size: 20px;
    border: none;
    z-index: 100;
    border-radius: 0 0 30.5px 30.5px;
    overflow: hidden; //요소가 많은 경우 안보이게
  `,
  //검색창과 검색창 확장 영역을 감쌀 컨테이너
  SearchBarContainer: styled.div`
    position: absolute;
    top: 10vh;
    left: 50%; // 왼쪽에서 50% 위치에 배치
    transform: translateX(-50%); // X축으로 -50% 만큼 이동하여 중앙 정렬
  `,
  //searchInput값에 입력이 생기면 나타날 컴포넌트 :리뷰잉과 태그를 표현할 때 사용
  SearchType: styled.span<SearchTypeProps>`
    padding: 0 230px 0 230px;
    color: black;
    border-bottom: ${(props) => (props.isBorder ? 'solid black' : 'none')};
  `,
  //위의 컴포넌트를 감싸 확장 영역의 맨 위에 표시될 컨테이너
  Top: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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
