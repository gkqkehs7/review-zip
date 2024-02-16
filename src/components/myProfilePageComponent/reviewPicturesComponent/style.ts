import styled from 'styled-components';

const RveiwPicturesContainer = styled.div`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: auto;
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
  align-items: center;
  width: 100%;
  height: 100%;
  flex: 1;
  border-radius: 20px;
  object-fit: cover;
`;

const PictureContainer = styled.div`
  overflow: hidden;
  position: relative;
  margin: 20px 10px;
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

const NoPostContainer = styled.div`
  width: 736px;
  height: 211px;
  background-color: transparent;
  border-radius: 21px;
  border: 1px solid #d5b2ff;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoPostText = styled.div`
  color: white;
  margin-bottom: 15px;
`;

const NoPostImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 15px;
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
  NoPostContainer,
  NoPostText,
  NoPostImage,
};
