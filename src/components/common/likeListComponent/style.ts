import styled from 'styled-components';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';

const styles = {
  Container: styled.div`
    position: absolute;

    width: 100vw;
    height: 100vh;
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.7);
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
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
  `,

  TopContainer: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
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
    font-weight: bold;
    color: black;
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

  Reviewing: styled.p`
    margin: 0 5px;
    font-size: 10px;
    font-weight: bold;
    color: #7300ff;
  `,
};

export default styles;
