import { AccountBarLoggedOff, Props, DispatchProps } from '../components/accountbarloggedoff';
import { LogOn, logOn, RefreshVehicles, refreshVehicles, IsFetching, isFetching } from '../actions/';
import { ApplicationState } from '../types';
import { tesla } from '../services/teslaapi';
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux';

function mapStateToProps() : Props {
  return {};
}

function mapDispatchToProps(dispatch: ThunkDispatch<ApplicationState, void, LogOn>) : DispatchProps {
  return {
    onLogOn: (email: string, password: string) => dispatch(callLogon(email, password))
  };
}

function callLogon(email: string, password: string) {
    return async (dispatch: ThunkDispatch<{}, {}, IsFetching | LogOn | RefreshVehicles>) => {
      try
      {
        dispatch(isFetching(true));
        const loginResult = await tesla.login(email, password);
        dispatch(logOn(email, loginResult.access_token));
        const vehiclesResult = await tesla.getVehicles(loginResult.access_token);
        dispatch(refreshVehicles(vehiclesResult));
      }
      finally {
        dispatch(isFetching(false));
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountBarLoggedOff);
