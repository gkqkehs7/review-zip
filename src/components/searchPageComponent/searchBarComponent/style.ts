import styled from 'styled-components';

const styles = {
  //검색창과 돋보기 div를 감쌀 컨테이너
  SearchBarContainer: styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;

    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 30.5px;

    margin-bottom: 30px;
  `,
  // 검색창 안에 위치한 돋보기
  Search: styled.img`
    width: 26.96px;
    height: 26.96px;
  `,

  // 검색 input
  SearchBar: styled.input`
    background-color: transparent;
    background-size: cover;
    margin: 20px;
    border: none;
    font-size: 20px;
    color: black;
    outline: none;
    &::placeholder {
      color: black;
    }
  `,
};

export default styles;
