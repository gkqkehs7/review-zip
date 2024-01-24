import styled from 'styled-components';
import { IoSearch, IoCloseSharp } from 'react-icons/io5';

const styles = {
  ExitSearchContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 20px 0 0;
  `,
  ExitButton: styled(IoCloseSharp)`
    color: white;
    width: 40px;
    height: 25px;
    cursor: pointer;
  `,
  SearchIcon: styled(IoSearch)`
    color: white;
    width: 28px;
    height: 25px;
    cursor: pointer;
  `,
};

export default styles;
