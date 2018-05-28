import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPatient} from '../actions/index'
import {bindActionCreators} from 'redux'
import PatientRequirementList from './patient_requirement_list'
import PatientMealList from './patient_meal_list';

class PatientDetail extends Component {
    componentDidMount() {
        this.props.fetchPatient(this.props.activeUser.patient_id);
    }

    render() {
        if (this.props.activePatient) {
            return (
                <div className="card patient-detail text-white bg-info">
                    <h2 className="card-header">Patient Information</h2>
                    <div className="card-body">
                        <div className="card-text">
                            <p>Name: {this.props.activePatient.first_name} {this.props.activePatient.last_name}</p>
                            <p>DOB: {this.props.activePatient.date_of_birth}</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <PatientRequirementList/>
                                </div>
                                <div className="col-sm-6">
                                    <PatientMealList/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="patient">
                    <p>Please Log In</p>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        activeUser: state.activeUser,
        activePatient: state.activePatient
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPatient}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetail);