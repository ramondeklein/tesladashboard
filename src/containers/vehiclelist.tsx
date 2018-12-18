import { VehicleList, Props, DispatchProps } from '../components/vehiclelist';
import { SelectVehicle, selectVehicle } from '../actions/vehicles';
import { ApplicationState } from '../types';
import { Vehicle } from '../services/teslaapi/datatypes';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

function mapStateToProps(state: ApplicationState) : Props {
  return {
    vehicles: state.vehicles.vehicles || [],
    selected: state.vehicles.selectedVehicle
  }
}

function mapDispatchToProps(dispatch: Dispatch<SelectVehicle>) : DispatchProps {
  return {
    onSelect: (vehicle?: Vehicle) => dispatch(selectVehicle(vehicle))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList);
