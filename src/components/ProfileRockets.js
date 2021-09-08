import PropTypes from 'prop-types';

const ProfileRocekts = (props) => {
  const { content } = props;
  return (
    <tr>
      <td className="Title-Entrie">{content}</td>
    </tr>
  );
};

ProfileRocekts.defaultProps = {
  content: '',
};

ProfileRocekts.propTypes = {
  content: PropTypes.string,
};

export default ProfileRocekts;
