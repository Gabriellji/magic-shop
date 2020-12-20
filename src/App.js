
import MagicProvider from './context/MagicProvider';
import { Link, Route, Switch } from 'react-router-dom';
import CardsWrapper from './components/seeds/cards-wrapper';

import Button from './components/button';

import "./App.scss"


const App = () => {

  return (
    <>
      <div>
        <Link to="/"><button>HOME</button></Link>
        <Link to="/strains"><button>STRAINS</button></Link>
        <Link to="/seeds"><button>SEEDS</button></Link>
      </div>
      <Switch>

        <div className="App">
          <Route exact path="/"
            render={() => <h1>Hoooome</h1>}
          />
          <Route  path="/strains"
            render={() => <h1>Strains</h1>}
          />
          <MagicProvider>
            <Route path="/seeds"
              render={() => <CardsWrapper />}
            />
          </MagicProvider>
        </div>

      </Switch>
    </>
  );
}

export default App;
