import ProfileCard from './ProfileCard';
import { connect } from 'react-redux';

const mapState = (state) => ({
  profiles: state.app.profiles
})

export default connect(mapState)(ProfileCard);