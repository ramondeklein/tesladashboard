import { connect } from "react-redux";
import { ConfigProps } from "redux-form";
import { ThunkDispatch } from "redux-thunk";

import { LogOn, logOn, RefreshVehicles, refreshVehicles } from "../actions";
import { AccountBarLoggedOffForm, DispatchProps, LoginData, Props } from "../components/accountbarloggedoff";
import { ApplicationState } from "../types";

function mapStateToProps(state: ApplicationState, props: Props): ConfigProps<LoginData, Props & DispatchProps> {
  return {
    form: "loginForm",
    initialValues: {
      email: "",
      password: "",
    },
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<ApplicationState, void, LogOn | RefreshVehicles>): DispatchProps {
  return {
    onSubmit: async (formData) => {
      await dispatch(logOn(formData.email, formData.password));
      await dispatch(refreshVehicles());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountBarLoggedOffForm);
