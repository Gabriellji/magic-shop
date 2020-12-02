import React, { useContext } from 'react';
import MagicProvider from './context/MagicProvider';

import Card from './components/Card'


const  App = () => {



  return (
    <MagicProvider>
    <div className="App">
      <Card/>
    </div>
    </MagicProvider>
  );
}

export default App;
