import styled from 'styled-components';

const RveiwPicturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3vh 24vw 0 24vw;
  padding: 0 5vw 0 5vw;
  gap: 20px; // 컨테이너 사이의 간격을 위해 추가
`;
const Picture = styled.img`
  width: 150px;
  height: 150px;
  border: solid 3px #d5b2ff;
  border-radius: 22px;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.3s;
`;
const PictureContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 5px 0 5px;
  &:hover {
    ${Picture} {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
`;

export default { RveiwPicturesContainer, Picture, PictureContainer };
