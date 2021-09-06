/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import Button from './Rockets_Button';
import logo from '../Assets/rocket.jpg';
import style from './Rocketcomponent.module.css';

const Rocket = (props) => {
  const {
    imgsrc, imgname, rocketname, rocketdescription,
  } = props;
  return (
    <div className={style.rocketcontainer}>
      <div className={style.imgcontainer}>
        <img src={logo} alt={imgname} className={style.img} />
      </div>
      <div className={style.descriptioncontainer}>
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
