import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/planet.png';
import './Navbar.css';

const Navbar = () => (
  <div className="NavBar">
    <div className="Logo">
      <Link to="/"><img className="Logo-Img" src={logo} alt="planet logo" /></Link>
      <span className="Logo-Text">Space Travelers&apos; Hub</span>
    </div>
    <div className="Navigation-Links">
      <ul className="Link-List">
        <li><NavLink to="/" activeClassName="Link-Active" className="Link-NoActive">Rockets</NavLink></li>
        <li><NavLink to="/missions" activeClassName="Link-Active" className="Link-NoActive">Missions</NavLink></li>
        <li><NavLink to="/myprofile" activeClassName="Link-Active" className="Link-NoActive">Myprofile</NavLink></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
