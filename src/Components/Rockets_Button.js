import PropTypes from 'prop-types';

const Button = (props) => {
  const reserved = props;
  if (reserved) {
    return <button type="button">Reserve</button>;
  }
  return <button type="button">Cancel Reservation</button>;
};

Button.proptype = {
  reserved: PropTypes.bool,
}.isRequired;

export default Button;
