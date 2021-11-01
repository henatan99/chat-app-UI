import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import HomePage from './containers/homePage';
import SignPage from './containers/SignPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:sign" exact component={SignPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
