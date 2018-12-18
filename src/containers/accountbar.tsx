import { AccountBar, Props } from '../components/accountbar';
import { ApplicationState } from '../types';
import { connect } from 'react-redux';

function mapStateToProps(state: ApplicationState) : Props {
  return {
    isLoggedOn: !!state.account.user
  }
}

export default connect(mapStateToProps)(AccountBar);
