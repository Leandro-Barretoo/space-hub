import './Missions.css';
import MissionCard from './MissionCard';

const Missions = () => (
  <div className="Table-Container">
    <table className="Mission-Table">
      <tr>
        <th className="Table-Content Mission">Mission</th>
        <th className="Table-Content Description">Description</th>
        <th className="Table-Content Status">Status</th>
        <th className="Table-Content Empty">&nbsp;</th>
      </tr>
      <MissionCard />
    </table>
  </div>
);

export default Missions;
