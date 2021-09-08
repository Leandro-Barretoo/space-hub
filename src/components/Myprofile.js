import { useSelector } from 'react-redux';
import './Myprofile.css';
import ProfileMission from './ProfileMission';
import ProfileRocekts from './ProfileRockets';

const Myprofile = () => {
  const missions = useSelector((state) => state.missionsReducer);
  const rockets = useSelector((state) => state.rocksReducer);

  const reservedMissions = missions.filter((mission) => mission.reserved === true);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const renderList = reservedMissions.map((mission) => (
    <ProfileMission key={mission.mission_id} content={mission.mission_name} />
  ));

  const renderRockets = reservedRockets.map((rockets) => (
    <ProfileRocekts key={rockets.id} content={rockets.name} />
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
        <table className="Mission-ProfileTable">
          <tbody>
            {renderRockets}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Myprofile;
