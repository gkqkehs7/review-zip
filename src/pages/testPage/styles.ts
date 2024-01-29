import styled, { keyframes, css } from 'styled-components';
import { MentionsInput, Mention, SuggestionDataItem } from 'react-mentions';

const styles = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
  `,

  MentionsTextarea: styled(MentionsInput)`
    font-family: Slack-Lato, appleLogo, sans-serif;
    font-size: 15px;
    padding: 8px 9px;

    & strong {
      background: skyblue;
    }

    & textarea {
      height: 44px;
      padding: 9px 10px !important;
      outline: none !important;
      border-radius: 4px !important;
      resize: none !important;
      line-height: 22px;
      border: none;
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
    color: rgb(28, 29, 28);
    width: 100%;

    & img {
      margin-right: 5px;
    }

    ${({ focus }) =>
      focus &&
      `
    background: #1264a3;
    color: white;
  `};
  `,
};

export default styles;
