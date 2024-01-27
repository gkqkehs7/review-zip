import styled from 'styled-components';
import { MdOutlineDelete } from 'react-icons/md';

const styles = {
  HistoryContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    border-bottom: 1px solid white;
    height: 50px;
  `,

  History: styled.div`
    color: black;
    font-weight: 500;
  `,

  DeleteButton: styled(MdOutlineDelete)`
    cursor: pointer;
    width: 30px;
    height: 30px;

    &:hover {
      transform: scale(1.1);
    }
  `,
};

export default styles;
