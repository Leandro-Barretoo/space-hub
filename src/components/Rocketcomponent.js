/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Button from './Rockets_Button';
import style from './Rocketcomponent.module.css';

const Rocket = (props) => {
  const {
    imgsrc, imgname, rocketname, rocketdescription, id, reserved,
  } = props;
  return (
    <div className={style.rocketcontainer}>
      <div className={style.imgcontainer}>
        <img src={imgsrc} alt={imgname} className={style.img} />
      </div>
      <div className={style.descriptioncontainer}>
        <h1>{rocketname}</h1>
        <p>{rocketdescription}</p>
        <Button id={id} reserved={reserved} />
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
