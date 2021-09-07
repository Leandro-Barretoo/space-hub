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
      rocketdescription={obj.description}
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
