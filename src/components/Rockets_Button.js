import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import stylebutt from './Rockets_Button.module.css';
import { reserverocket } from '../redux/rockets/rocks';

const Button = (props) => {
  const { reserved, id } = props;
  const dispatch = useDispatch();
  const handlereserve = (e) => {
    dispatch(reserverocket(e.target.id));
  };
  if (reserved) {
    return <button id={id} className={stylebutt.buttRes} type="button">Cancel Reservation</button>;
  }
  return <button id={id} onClick={handlereserve} className={stylebutt.buttNotRes} type="button">Reserve Rocket</button>;
};

Button.propTypes = {
  reserved: PropTypes.bool,
  key: PropTypes.number,
}.isRequired;

export default Button;
