import styled from 'styled-components';

const styles = {
  UserProfileStatsContainer: styled.div`
    display: flex;
    margin-top: 5vh;
  `,
  UserProfileStats: styled.p`
    color: white;
    font-weight: bolder;
    margin: 20px;
  `,
  EditProfileButtonContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 50px 0 20px;
    padding: 0 40px 0 0;
  `,
  EditProfileButton: styled.button`
    background-color: #957db3;
    width: 95px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bolder;
    color: black;
    border-radius: 7px;
  `,
  PlusButton: styled.img`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
  `,
};

export default styles;
