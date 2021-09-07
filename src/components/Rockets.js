/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocketcomponent';
import fetchrockets from '../utils/rockets_API';
import { addrocks } from '../redux/rockets/rocks';

const Rockets = () => {
  const [rockets, setRockets] = useState([]);
  const stat = useSelector((state) => state.rocksReducer);
  const dipsatch = useDispatch();
  const loadRockets = async () => {
    const rocktObj = await fetchrockets();
    if (stat.length !== rocktObj.length) {
      dipsatch(addrocks(rocktObj));
      setRockets(rocktObj);
    }
  };

  const rocketList = stat.map((obj) => (
    <Rocket
      key={obj.id}
      imgsrc={obj.image[0]}
      rocketname={obj.name}
      rocketdescription="The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 2 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth."
    />
  ));
  useEffect(() => {
    loadRockets();
  }, []);

  return (
    <>
      {rocketList}
    </>
  );
};

export default Rockets;
