import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Missions.css';
import MissionCard from './MissionCard';
import { addMission } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsList = useSelector((state) => state.missionsReducer);

  const getMissions = () => (dispatch) => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json())
      .then((data) => data.forEach((mission) => {
        const allowed = ['mission_id', 'mission_name', 'description'];
        const newMission = Object.keys(mission)
          .filter((key) => allowed.includes(key))
          .reduce((obj, key) => {
            const temp = obj;
            temp[key] = mission[key];
            return temp;
          }, {});
        dispatch(addMission(newMission));
      }));
  };

  useEffect(() => {
    if (!missionsList.length) {
      dispatch(getMissions());
    }
  }, []);

  const myMissionsArr = missionsList.map((missions) => (
    <MissionCard
      key={missions.mission_id}
      missionid={missions.mission_id}
      name={missions.mission_name}
      description={missions.description}
    />
  ));

  return (
    <div className="Table-Container">
      <table className="Mission-Table">
        <thead>
          <tr>
            <th className="Table-Content Mission">Mission</th>
            <th className="Table-Content Description">Description</th>
            <th className="Table-Content Status">Status</th>
            <th className="Table-Content Empty">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {myMissionsArr}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
