import { VehicleDetails, Props } from '../components/vehicledetails';
import { ApplicationState } from '../types';
import { connect } from 'react-redux';

function mapStateToProps(state: ApplicationState) : Props {
  return {
    vehicle: state.vehicles.selectedVehicle
  }
}

export default connect(mapStateToProps)(VehicleDetails);
