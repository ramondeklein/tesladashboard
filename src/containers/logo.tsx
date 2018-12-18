import { Logo, Props } from '../components/logo';
import { ApplicationState } from '../types';
import { connect } from 'react-redux';

function mapStateToProps(state: ApplicationState) : Props {
  return {
    isRotating: state.isFetching.fetchCount > 0
  }
}

export default connect(mapStateToProps)(Logo);
