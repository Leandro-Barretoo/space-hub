import PropTypes from 'prop-types';
import stylebutt from './Rockets_Button.module.css';

const Button = (props) => {
  const reserved = props;
  if (reserved) {
    return <button className={stylebutt.buttRes} type="button">Reserve Rocket</button>;
  }
  return <button className={stylebutt.buttRes} type="button">Cancel Reservation</button>;
};

Button.proptype = {
  reserved: PropTypes.bool,
}.isRequired;

export default Button;
