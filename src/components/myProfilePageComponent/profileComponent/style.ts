import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';

const styles = {
  ProfilePictureContainer: styled.div`
    positipn: relative;
    top: 0;
    width: 900px;
    min-width: 400px;
    margin: 0 auto;
  `,
  ProfileContainer: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-bottom: solid 2px #d5b2ff;
  `,
  PostComponentContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 0 0;
  `,
};

export default styles;
