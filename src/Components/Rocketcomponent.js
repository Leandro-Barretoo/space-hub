import PropTypes from 'prop-types';
import Button from './Rockets_Button';

const Rocket = (props) => {
  const {
    imgsrc, imgname, rocketname, rocketdescription,
  } = props;
  return (
    <div className="rocketcontaine">
      <div className="imgcontainer">
        <img src={imgsrc} alt={imgname} />
      </div>
      <div className="descriptioncontainer">
        <h1>{rocketname}</h1>
        <p>{rocketdescription}</p>
        <Button reserved={false} />
      </div>
    </div>
  );
};

Rocket.propTypes = {
  imgsrc: PropTypes.string,
  imgname: PropTypes.string,
  rocketname: PropTypes.string,
  rocketdescription: PropTypes.string,
}.isRequired;

export default Rocket;
