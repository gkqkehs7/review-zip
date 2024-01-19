// TestPage.js
import React, { useState } from 'react';
import styles from './styles';

const TestPage = () => {
  const [splitCards, setSplitCards] = useState(false);
  const [combineCards, setCombineCards] = useState(true);

  const splitCard = () => {
    setSplitCards(!splitCards);
  };

  const combineCard = () => {
    setCombineCards(false);
  };

  return (
    <styles.Container>
      <styles.Card1 width={'200px'} move={'100px'} splitCards={splitCards}>
        a
      </styles.Card1>

      <styles.Card2 width={'200px'} move={'100px'} splitCards={splitCards}>
        b
      </styles.Card2>

      <button onClick={splitCard}>open Animation</button>
      <button onClick={combineCard}>close Animation</button>
    </styles.Container>
  );
};

export default TestPage;
