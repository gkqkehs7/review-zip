import styled from 'styled-components';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';
import style from '../reviewPicturesComponent/style';

const styles = {
  Container: styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;
    z-index: 100;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  `,
  ReviewingStopModal: styled.div`
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1100;
  `,
  ReviewingProfileContainer: styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  ReviewingUserProfile: styled.img`
    border-radius: 50px;
    width: 90px;
    height: 90px;
  `,
  BorderTopContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: solid black 1px;
    cursor: pointer;
  `,
  InnerContainer: styled.div`
    width: 498px;
    height: 498px;
    background-color: white;
    border-radius: 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::scrollbar-thumb {
      background: #331b50;
    }
  `,

  TopContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  `,
  TitleContainer: styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
  `,
  Title: styled.div`
    font-size: large;
    font-weight: bold;
  `,

  ExitButton: styled(IoCloseSharp)`
    width: 33px;
    height: 33px;

    cursor: pointer;
  `,

  Line: styled.div`
    border-top: 2px solid #efefef;
    width: 100%;
  `,

  SearchContainer: styled.div`
    width: 458px;
    height: 52px;

    display: flex;
    align-items: center;
    background-color: #efefef;

    padding: 15px;
    border-radius: 4px;

    margin: 10px 0;
  `,

  SearchIcon: styled(IoSearch)`
    color: #a1a1a1;
    width: 22px;
    height: 22px;
  `,

  SearchInput: styled.input`
    flex: 1;
    height: 22px;
    border: none;
    outline: none;
    background-color: #efefef;

    padding-left: 4px;

    vertical-align: middle;
  `,

  UserListContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
  `,

  UserList: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px;
  `,

  UserData: styled.div`
    display: flex;
    align-items: center;
  `,

  UserImage: styled.img`
    width: 40.8px;
    border-radius: 50px;
    margin-right: 15px;
  `,

  UserName: styled.div`
    font-size: 20px;
    color: black;
  `,
  Reviewing: styled.p`
    margin: 0 5px;
    font-size: 10px;
    font-weight: bold;
    color: #7300ff;
  `,

  FollowButton: styled.div`
    width: 91px;
    height: 39px;
    border-radius: 10px;
    background-color: #957db3;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  FollowText: styled.div`
    color: white;
  `,
};

export default styles;
