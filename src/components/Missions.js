import { useEffect } from 'react';
import './Missions.css';
import MissionCard from './MissionCard';

const Missions = () => {
  const getMissions = () => {
    fetch('https://api.spacexdata.com/v3/missions')
      .then((response) => response.json());
  };

  useEffect(() => {
    getMissions();
  }, []);

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
          <MissionCard />
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
