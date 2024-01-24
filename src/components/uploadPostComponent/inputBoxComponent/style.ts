import styled from 'styled-components';
import { MentionsInput } from 'react-mentions';

const styles = {
  MentionsTextarea: styled(MentionsInput)`
    flex: 1;
    font-family: Slack-Lato, appleLogo, sans-serif;
    font-size: 15px;
    padding: 8px 9px;
    overflow: auto;

    & strong {
      background-color: #e5d9f4;
    }

    & textarea {
      padding: 9px 10px !important;
      outline: none !important;
      border-radius: 4px !important;
      resize: none !important;
      line-height: 22px;
      border: none;
      overflow-y: auto;
    }

    & ul {
      border: 1px solid lightgray;
      max-height: 200px;
      overflow-y: auto;
      padding: 9px 10px;
      background: white;
      border-radius: 4px;
      width: 150px;
    }
  `,

  EachMention: styled.button<{ focus: boolean }>`
    padding: 4px 20px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: black;
    width: 100%;

    ${({ focus }) =>
      focus &&
      `
      background: #9766D1;
      color: white;
      `};
  `,
};

export default styles;
