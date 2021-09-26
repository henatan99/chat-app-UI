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
          <Route path="/signin" exact component={SignPage} />
          <Route path="/signup" exact component={SignPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
