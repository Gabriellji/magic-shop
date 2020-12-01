import React, { useContext } from 'react';
import MagicProvider from './context/MagicProvider';

import Div from './components/Div'


const  App = () => {



  return (
    <MagicProvider>
    <div className="App">
      <Div/>
    </div>
    </MagicProvider>
  );
}

export default App;
