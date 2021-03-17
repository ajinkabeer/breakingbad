import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const App = () => (
  <div>
    <header>
      <h1>Breaking Bad</h1>
    </header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details/:slug" component={Details} />
    </Switch>
  </div>
);

export default App;
