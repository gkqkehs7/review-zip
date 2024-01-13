import styled from 'styled-components';
import { SearchBarProps } from '@/pages/searchPage/searchPage';
const styles = {
  // 검색창 컴포넌트
  SearchBar: styled.input<SearchBarProps>`
    background-color: ${(props) =>
      props.isFocused
        ? 'rgba(255, 255, 255, 0.4)'
        : 'rgba(255, 255, 255, 0.6)'}; // 포커스시에 투명도 변화 흰색 배경에 투명도 60%
    background-size: cover;
    width: 70vw;
    max-width: 1340px;
    height: 10vh;
    max-height: 84px;

    &::placeholder {
      color: black;
    }

    &:focus {
      border-radius: 30.5px 30.5px 0 0;
    }

    font-size: 20px;
    border: None;
    border-radius: 30.5px;
    color: black;
    box-shadow: ${(props) =>
      props.isFocused
        ? '0'
        : '0px 4px 8px rgba(0, 0, 0, 0.3)'}; //포커스가 되면 그림자
    padding-left: 96px;
    outline: none;
  `,
  // 검색창이 포커스 된 경우 나타날 검색창 확장 영역 컴포넌트
  SearchBarExtends: styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.4); // 흰색 배경에 투명도 60%
    background-size: cover;
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
    top: 13vh;
    left: 50%; // 왼쪽에서 50% 위치에 배치
    transform: translateX(-50%); // X축으로 -50% 만큼 이동하여 중앙 정렬
  `,
  // 검색창 안에 위치한 돋보기
  Search: styled.div`
    position: absolute;
    top: 0;
    background-image: url('images/searchPage/SearchImage.png');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    width: 26.96px;
    height: 26.96px;
    margin: 25px;
  `,
};

export default styles;
