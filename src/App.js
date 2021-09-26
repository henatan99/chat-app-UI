import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import HomePage from './containers/homePage';

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/" exact component={HomePage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
