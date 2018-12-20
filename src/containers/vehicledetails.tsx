import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Props, VehicleDetails } from "../components/vehicledetails";
import { ApplicationState } from "../types";

interface RouterProps {
  vehicleId: string;
}

function getSelectedVehicle(state: ApplicationState, vehicleId: number) {
  if (state.vehicles.vehicles) {
    return state.vehicles.vehicles.find((v) => v.id === vehicleId);
  }
}

function mapStateToProps(state: ApplicationState, ownProps: RouteComponentProps<RouterProps>): Props {
  return {
    vehicle: getSelectedVehicle(state, parseInt(ownProps.match.params.vehicleId, 10)),
  };
}

export default connect(mapStateToProps)(VehicleDetails);
