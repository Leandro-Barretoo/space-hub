import logo from '../Assets/planet.png';
import './Navbar.css';

const Navbar = () => (
  <div className="NavBar">
    <div className="Logo">
      <img className="Logo-Img" src={logo} alt="planet logo" />
      <span className="Logo-Text">Space Travelers&apos; Hub</span>
    </div>
    <div className="Navigation-Links">
      <ul className="Link-List" />
    </div>
  </div>
);

export default Navbar;
