import { AccountBarLoggedOn, Props, DispatchProps } from '../components/accountbarloggedon';
import { LogOff, logOff } from '../actions/account';
import { resetVehicles, ResetVehicles } from '../actions/vehicles';
import { ApplicationState } from '../types';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state: ApplicationState) : Props {
  if (!state.account.user) {
    throw new Error("No user set");
  }
  
  return { email: state.account.user.email };
}

function mapDispatchToProps(dispatch: Dispatch<LogOff | ResetVehicles>) : DispatchProps {
  return {
    onLogOff: () => {
      dispatch(logOff());
      dispatch(resetVehicles())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountBarLoggedOn);
