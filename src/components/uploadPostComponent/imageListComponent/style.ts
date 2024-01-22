import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: absolute;
    background-color: #9766d1;

    bottom: 65px;
    right: 0;
    z-index: 100;
    display: flex;
    padding: 0 5px;
  `,

  InputButton: styled.input`
    display: none;
  `,

  ImageContainer: styled.div`
    cursor: pointer;
    padding: 10px 5px;
    position: relative;
  `,

  Image: styled.img`
    width: 90px;
    height: 90px;
    vertical-align: bottom; // 이미지 이상한 공백 삭제
  `,

  ImageDeleteButton: styled.div`
    cursor: pointer;
    color: white;
    position: absolute;
    top: 4px;
    font-size: large;
    right: 6px;
    font-weight: bold;
  `,

  ImagePlusButtonContainer: styled.div`
    cursor: pointer;
    position: relative;
    padding: 10px 5px;
  `,

  ImagePlusButtonBackground: styled.img`
    width: 90px;
    height: 90px;
    vertical-align: bottom;
  `,

  ImagePlusButton: styled.img`
    width: 23px;
    height: 23px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default styles;
