import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Myprofile from './Components/Myprofile';
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
        <Route to="/myprofile">
          <Myprofile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
