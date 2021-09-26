import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import HomePage from './containers/homePage';
import SignPage from './containers/SignPage';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={HomePage} />
          <Route path="/:sign" exact component={SignPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
