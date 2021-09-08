import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Myprofile from './components/Myprofile';
import Rockets from './components/Rockets';
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
        <Route path={process.env.PUBLIC_URL + '/missions'}>
          <Missions />
        </Route>
        <Route path="/myprofile">
          <Myprofile />
        </Route>
        <Route path="/">
          <Rockets />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
