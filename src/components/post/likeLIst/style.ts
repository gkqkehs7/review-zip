import styled from 'styled-components';

const styles = {
  Container: styled.div`
    box-sizing: border-box;
    position: absolute;
    background-color: #331b50;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    width: 100%;
    height: 40%;
    left: 0;
    bottom: 0;

    padding: 0 20px;

    display: flex;
    flex-direction: column;
  `,

  TopContainer: styled.div`
    text-align: center;
  `,

  TopText: styled.p`
    color: white;
    position: relative;
  `,

  ExitButton: styled.div`
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    font-size: large;
    cursor: pointer;
  `,

  Line: styled.div`
    border-top: 1px solid white;
    width: 100%;
  `,

  UserListContainer: styled.div`
    box-sizing: border-box;
    overflow: scroll;
    margin: 10px 0;

    height: 100%;
    background-color: aliceblue;
  `,

  User: styled.div`
    color: white;
  `,
};

export default styles;
