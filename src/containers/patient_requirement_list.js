import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPatientRequirements} from "../actions";
import {bindActionCreators} from 'redux';

const listClasses = "list-group-item requirement";

class PatientRequirementList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchPatientRequirements(this.props.activePatient.requirements);

    }
    renderList() {
        return this.props.patientRequirements.map((req) => {
            let typeClass = '';
            switch (req.type) {
                case 'ALLERGEN':
                    typeClass = ' list-group-item-danger';
                    break;
                case 'DIETARY_POSITIVE':
                    typeClass = ' list-group-item-success';
                    break;
                case 'DIETARY_NEGATIVE':
                    typeClass = ' list-group-item-warning';
                    break;
                default:
                    typeClass = '';
            }
            return (
                <li key={req.uri}
                    className={listClasses + typeClass}>
                    <div className="row">
                        <div className="col-sm-12">
                            {req.label} ({req.scale.slice(0, 1).toUpperCase() + req.scale.slice(1, req.scale.length).toLowerCase()})
                        </div>
                    </div>
                </li>
            );
        })
    }

    render() {
        if (this.props.patientRequirements.length > 0) {
            return (
                <div className="card bg-light text-dark">
                    <h3 className="card-header">Dietary Requirements</h3>
                    <ul className="list-group list-group-flush requirement-list">
                        {this.renderList()}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="card bg-light text-dark">
                    <h3 className="card-header">Dietary Requirements</h3>
                    <div className="card-body">
                        Loading...
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        activePatient: state.activePatient,
        patientRequirements: state.patientRequirements
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPatientRequirements}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientRequirementList);