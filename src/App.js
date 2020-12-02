import React, { useContext } from 'react';
import MagicProvider from './context/MagicProvider';

import CardList from './components/CardList'


const  App = () => {

  return (
    <MagicProvider>
    <div className="App">
      <CardList/>
    </div>
    </MagicProvider>
  );
}

export default App;
