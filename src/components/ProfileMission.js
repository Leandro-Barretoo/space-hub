import PropTypes from 'prop-types';

const ProfileMission = (props) => {
  const { content } = props;
  return (
    <tr>
      <td className="Title-Entrie">{content}</td>
    </tr>
  );
};

ProfileMission.defaultProps = {
  content: '',
};

ProfileMission.propTypes = {
  content: PropTypes.string,
};

export default ProfileMission;
