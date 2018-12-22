import { connect } from "react-redux";
import { Logo, Props } from "../components/logo";
import { ApplicationState } from "../types";

function mapStateToProps(state: ApplicationState): Props {
  return {
    isRotating: state.isFetching.fetchCount > 0,
  };
}

export default connect(mapStateToProps)(Logo);
