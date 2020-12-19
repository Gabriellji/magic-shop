
import MagicProvider from './context/MagicProvider';

import CardsWrapper from './components/cards-wrapper';


import "./App.scss"


const App = () => {

  return (
    <MagicProvider>
      <div className="App">

        <CardsWrapper />
      </div>
    </MagicProvider>
  );
}

export default App;
