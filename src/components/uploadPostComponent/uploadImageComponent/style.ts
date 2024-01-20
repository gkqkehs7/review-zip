import styled from 'styled-components';

const styles = {
  Container: styled.div`
    flex: 1;
    width: 100%;
    margin: 10px 0;
    position: relative;
    background-color: #331b50;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  ExplanationText: styled.div`
    color: white;
    font-weight: bold;
    margin: 10px 0 30px 0;
  `,

  UploadImagePicture: styled.img`
    width: 90px;
    height: 90px;
  `,

  UploadButton: styled.div`
    cursor: pointer;
    background-color: #7843b6;
    border-radius: 29px;
    padding: 15px 25px;
  `,

  UploadButtonText: styled.div`
    color: white;
    font-weight: bold;
  `,

  InputButton: styled.input`
    display: none;
  `,
};

export default styles;
