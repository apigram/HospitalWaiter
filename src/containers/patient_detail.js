import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPatient} from '../actions/index'
import {bindActionCreators} from 'redux'
import RequirementList from './requirement_list'

class PatientDetail extends Component {
  componentDidMount() {
    this.props.fetchPatient(1);
  }
  render(){
    if (this.props.activePatient) {
      return (
        <section className="patient-detail">
            <h1>Patient Information</h1>
          <p>Name: {this.props.activePatient.first_name} {this.props.activePatient.last_name}</p>
          <p>DOB: {this.props.activePatient.date_of_birth}</p>
          <p>Dietary Requirements:</p>
            <RequirementList/>
        </section>
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
    activePatient: state.activePatient
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPatient}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientDetail);