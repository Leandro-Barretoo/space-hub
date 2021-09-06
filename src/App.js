import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Line from './components/Line';
import Missions from './components/Missions';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Navbar />
            <Line />
          </div>
        </Route>
        <Route path="/missions">
          <div>
            <Navbar />
            <Line />
            <Missions />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
