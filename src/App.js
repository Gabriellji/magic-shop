import React, { useContext } from 'react';
import MagicProvider from './context/MagicProvider';

import CardsWrapper from './components/cards-wrapper';


const  App = () => {

  return (
    <MagicProvider>
    <div className="App">
      <CardsWrapper/>
    </div>
    </MagicProvider>
  );
}

export default App;
