import { useSelector } from 'react-redux';
import './Myprofile.css';
import ProfileMission from './ProfileMission';

const Myprofile = () => {
  const missions = useSelector((state) => state.missionsReducer);

  const reservedMissions = missions.filter((mission) => mission.reserved === true);

  const renderList = reservedMissions.map((mission) => (
    <ProfileMission key={mission.mission_id} content={mission.mission_name} />
  ));

  return (
    <div className="queryresult">
      <div className="Box">
        <h2 className="Cat-Title">My Missions</h2>
        <table className="Mission-ProfileTable">
          <tbody>
            {renderList}
          </tbody>
        </table>
      </div>
      <div className="Box">
        <h2 className="Cat-Title">My Rockets</h2>
      </div>
    </div>
  );
};
export default Myprofile;
