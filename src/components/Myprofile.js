import './Myprofile.css';
import ProfileMission from './ProfileMission';

const Myprofile = () => (
  <div className="queryresult">
    <div className="Box">
      <h2 className="Cat-Title">My Missions</h2>
      <table className="Mission-ProfileTable">
        <tbody>
          <ProfileMission />
        </tbody>
      </table>
    </div>
    <div className="Box">
      <h2 className="Cat-Title">My Rockets</h2>
    </div>
  </div>
);
export default Myprofile;
