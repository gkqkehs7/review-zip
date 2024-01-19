import styled from 'styled-components';

const RveiwPicturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 24vw 0 24vw;
  padding: 0 5vw 0 5vw;
`;

const IconContainer = styled.div`
  position: relative;
  top: -15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
`;

const Picture = styled.img`
  width: 150px;
  height: 150px;
  border: solid 3px #d5b2ff;
  border-radius: 17px;
  object-fit: cover;
`;
const PictureContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 10px;
  width: 160px;
  height: 160px;
  cursor: pointer;

  &:hover ${IconContainer} {
    visibility: visible;
    transition: visibility 0.4s ease-in-out;
  }

  &:hover ${Picture} {
    background-color: black;
    opacity: 0.3;
    transition: opacity 0.4s ease-in-out;
  }
`;

const IconBox = styled.div`
  margin: 5px;
`;

const Icon = styled.img`
  //display: none;
  width: 20px;
  height: 20px;
`;

const Count = styled.p`
  //display: none;
  position: relative;
  text-align: center;
  top: -2vh;
  color: white;
  font-size: 10px;
`;

export default {
  RveiwPicturesContainer,
  Picture,
  PictureContainer,
  IconContainer,
  Icon,
  Count,
  IconBox,
};
