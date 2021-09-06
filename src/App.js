import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Myprofile from './Components/Myprofile';
import Rockets from './Components/Rockets';
import Navbar from './Components/Navbar';
import Line from './Components/Line';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Line />
      </>
      <Switch>
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
