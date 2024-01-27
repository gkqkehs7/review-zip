import styled from 'styled-components';

export interface SearchTypeProps {
  isBorder: boolean;
}

const styles = {
  Container: styled.div`
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 20px;
    border: none;
    z-index: 100;
    border-radius: 0 0 30.5px 30.5px;
    overflow: auto; //요소가 많은 경우 안보이게
  `,

  //위의 컴포넌트를 감싸 확장 영역의 맨 위에 표시될 컨테이너
  Top: styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  `,

  //searchInput값에 입력이 생기면 나타날 컴포넌트 :리뷰잉과 태그를 표현할 때 사용
  SearchType: styled.div<SearchTypeProps>`
    display: flex;
    padding: 10px 0px;
    justify-content: center;
    align-items: center;
    min-width: 100px;
    flex-grow: 1;
    color: black;
    border-bottom: ${({ isBorder }) => (isBorder ? 'solid black' : 'none')};
    font-weight: bold;
  `,
};

export default styles;
