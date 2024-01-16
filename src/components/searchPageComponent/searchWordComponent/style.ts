import styled from 'styled-components';
const styles = {
  //검색 기록에 뜰 데이터(searchHistory)나 유저의 입력에 따라 필터가 된 데이터( filteredData)들을 감쌀 컨테이너 hr태그를 따로 사용안하고 아래쪽만 border처리
  HistoryContainer: styled.div`
    display: flex;
    justify-content: space-between;
    margin: 28.8px 40px 28.8px 40px;
    border-bottom: 1px solid white;
  `,
};

export default styles;
