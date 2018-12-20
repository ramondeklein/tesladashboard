import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { LogOn, logOn, RefreshVehicles, refreshVehicles } from "../actions/";
import { AccountBarLoggedOff, DispatchProps } from "../components/accountbarloggedoff";
import { ApplicationState } from "../types";

function mapDispatchToProps(dispatch: ThunkDispatch<ApplicationState, void, LogOn | RefreshVehicles>): DispatchProps {
  return {
    onLogOn: async (email: string, password: string) => {
      await dispatch(logOn(email, password));
      await dispatch(refreshVehicles());
    },
  };
}

export default connect(null, mapDispatchToProps)(AccountBarLoggedOff);
