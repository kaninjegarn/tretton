import Input from './Input';
import { connect } from 'react-redux';

const mapState = (state) => ({
  text:state.app.text
})

export default connect(mapState)(Input);