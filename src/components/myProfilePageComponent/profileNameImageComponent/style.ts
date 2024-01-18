import styled from 'styled-components';

const styles = {
  NameImageContainer: styled.div`
    display: flex;
    margin-top: 10vh;
  `,
  UserProfileImage: styled.img`
    width: 153px;
    height: 153px;
    border: solid #d5b2ff;
    border-radius: 50%;
  `,
  UserNameContainer: styled.div`
    width: 200px;
    min-width: 100px;
    height: 100px;
  `,
  UserName: styled.p`
    margin-left: 30px;
    color: white;
    font-size: 40px;
    font-weight: bolder;
  `,
};

export default styles;
