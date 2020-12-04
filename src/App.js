
import MagicProvider from './context/MagicProvider';

import CardsWrapper from './components/cards-wrapper';
import Title from './components/title';


const App = () => {

  return (
    <MagicProvider>
      <div className="App">
        <div className="title_wrap">
          <Title text="Welcome!" />
        </div>

        <CardsWrapper />
      </div>
    </MagicProvider>
  );
}

export default App;
