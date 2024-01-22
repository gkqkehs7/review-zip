import styled from 'styled-components';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';

const styles = {
  HashtagTopContainer: styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 100px;
    border-bottom: solid 2px #d5b2ff;
  `,
  TagName: styled.p`
    margin-left: 30px;
    color: white;
    font-size: 40px;
    font-weight: bolder;
  `,
  TagCount: styled.p`
    color: white;
    font-size: 20px;
    font-weight: bolder;
  `,
};

export default styles;
