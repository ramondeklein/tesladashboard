import { connect } from "react-redux";
import { Props, VehicleList } from "../components/vehiclelist";
import { ApplicationState } from "../types";

function mapStateToProps(state: ApplicationState): Props {
  return {
    vehicles: state.vehicles.vehicles || [],
  };
}

export default connect(mapStateToProps)(VehicleList);
