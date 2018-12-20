import { connect } from "react-redux";
import { AccountBar, Props } from "../components/accountbar";
import { ApplicationState } from "../types";

function mapStateToProps(state: ApplicationState): Props {
  return {
    isLoggedOn: !!state.account.user,
  };
}

export default connect(mapStateToProps)(AccountBar);
