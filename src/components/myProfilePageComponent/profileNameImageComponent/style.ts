import styled from 'styled-components';
import { ProfileNameImagePrps } from './profileNameImageComponent';
const styles = {
  NameImageContainer: styled.div`
    display: flex;
  `,
  UserProfileImage: styled.img`
    width: 153px;
    height: 153px;
    border: solid #d5b2ff;
    border-radius: 50%;
  `,
  EditUserProfile: styled.input`
    position: absolute;
    width: 153px;
    height: 153px;
    cursor: pointer;
    background: transparent;
    opacity: 0;
    border: none;
    outline: none;
    z-index: 100;
  `,
  IconCamera: styled.img`
    position: relative;
    left: -3vw;
    top: 15vh;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `,
  UserNameContainer: styled.div<ProfileNameImagePrps>`
    width: 200px;
    min-width: 100px;
    height: 100px;
    margin: 0 20px;

    ${({ isEditProfile }) =>
      isEditProfile ? 'border-bottom: 1px solid white;' : ''}
  `,
  UserName: styled.p`
    margin-left: 30px;
    color: white;
    font-size: 40px;
    font-weight: bolder;
  `,
  EditUserName: styled.input`
    background: transparent;
    color: white;
    font-size: 40px;
    font-weight: bolder;
    border: none;
    outline: none;
    cursor: pointer;
  `,
  IconEditUserName: styled.img`
    position: relative;
    top: 8vh;
    left: -3vw;
    width: 40px;
    height: 40px;
  `,
};

export default styles;
