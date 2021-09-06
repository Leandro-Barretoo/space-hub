const Button = (props) => {
  if (props.reserved) {
    <button type="button">Cancel Reservation</button>;
  } else {
    <button type="button">Reserve</button>;
  }
};

export default Button;
