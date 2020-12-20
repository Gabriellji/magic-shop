
import MagicProvider from './context/MagicProvider';

import CardsWrapper from './components/cards-wrapper';


import "./App.scss"
import { Link, Route, Switch } from 'react-router-dom';
import Button from './components/button';


const App = () => {

  return (
    <>
    <div>
      <Link to="/"><button>HOME</button></Link>
      <Link to="/seeds"><button>SEEDS</button></Link>
    </div>
    <Switch>
    <MagicProvider>
      <div className="App">
      <Route exact path="/"
      render={() => <h1>Hoooome</h1>}
      />

        <Route path="/seeds"
          render={() => <CardsWrapper />}
        />
      </div>
    </MagicProvider>
    </Switch>
    </>
  );
}

export default App;
