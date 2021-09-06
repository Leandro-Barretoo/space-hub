import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Myprofile from './components/Myprofile';
import Navbar from './components/Navbar';
import Line from './components/Line';
import Missions from './components/Missions';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Line />
      </>
      <Switch>
        <Route exact path="/">
          <div />
        </Route>
        <Route path="/missions">
          <div>
            <Missions />
          </div>
        </Route>
        <Route to="/myprofile">
          <Myprofile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
