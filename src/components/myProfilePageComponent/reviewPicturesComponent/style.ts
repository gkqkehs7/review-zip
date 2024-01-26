import styled from 'styled-components';

const RveiwPicturesContainer = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  overflow-y: auto;
`;

const IconContainer = styled.div`
  position: relative;
  top: -120px;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
`;

const PictureBorder = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  border: solid 3px #d5b2ff;
  border-radius: 20px;
`;

const IconUnion = styled.img`
  position: relative;
  top: -5vh;
  left: 120px;
  width: 20px;
  height: 20px;
  z-index: 1;
`;

const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: cneter;
  flex: 1;
  border-radius: 20px;
`;
const PictureContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 10px;
  width: 150px;
  height: 150px;
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

  &:hover ${PictureBorder} {
    border: solid 3px #d5b2ff;
    border-radius: 20px;
  }
`;

const IconBox = styled.div`
  margin: 5px;
`;

const Icon = styled.img`
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
  PictureBorder,
  IconUnion,
  Picture,
  PictureContainer,
  IconContainer,
  Icon,
  Count,
  IconBox,
};
