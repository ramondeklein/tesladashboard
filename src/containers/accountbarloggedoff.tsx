import { AccountBarLoggedOff, DispatchProps } from '../components/accountbarloggedoff';
import { LogOn, logOn, RefreshVehicles, refreshVehicles } from '../actions/';
import { ApplicationState } from '../types';
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch: ThunkDispatch<ApplicationState, void, LogOn | RefreshVehicles>) : DispatchProps {
  return {
    onLogOn: async (email: string, password: string) => {
      await dispatch(logOn(email, password));
      await dispatch(refreshVehicles());
    }
  };
}

export default connect(null, mapDispatchToProps)(AccountBarLoggedOff);
