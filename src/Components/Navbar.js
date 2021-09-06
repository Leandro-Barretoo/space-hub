import { NavLink } from 'react-router-dom';
import logo from '../Assets/planet.png';
import './Navbar.css';

const Navbar = () => (
  <div className="NavBar">
    <div className="Logo">
      <img className="Logo-Img" src={logo} alt="planet logo" />
      <span className="Logo-Text">Space Travelers&apos; Hub</span>
    </div>
    <div className="Navigation-Links">
      <ul className="Link-List">
        <NavLink to="/myprofile">Myprofile</NavLink>
      </ul>
    </div>
  </div>
);

export default Navbar;
