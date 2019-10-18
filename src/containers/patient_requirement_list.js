import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AUTH_HEADER, fetchPatientRequirements} from "../actions";
import {bindActionCreators} from 'redux';
import axios from 'axios';

const listClasses = "list-group-item requirement";

class PatientRequirementList extends Component {
    constructor(props) {
        super(props)
        this.state = {requirements: []}
        this.props.activePatient.requirements.map((req) => {
            axios.get(req.requirement, AUTH_HEADER)
                .then((response) => {
                    console.log(response);
                    let scaleStr = '';
                    if (req.scale !== null) {
                        scaleStr = ' (' + req.scale.slice(0, 1).toUpperCase() + req.scale.slice(1, req.scale.length).toLowerCase() + ')'
                    }
                    this.setState({requirements: [...this.state.requirements, {
                            url: req.url,
                            type: response.data.type,
                            label: response.data.label,
                            scale: scaleStr
                        }]
                    });
                })
        })
    }
    renderList() {
        return this.state.requirements.map((req) => {
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
                <li key={req.url}
                    className={listClasses + typeClass}>
                    <div className="row">
                        <div className="col-sm-12">
                            {req.label} {req.scale}
                        </div>
                    </div>
                </li>
            );
        })
    }

    render() {
        if (this.props.activePatient.requirements.length > 0) {
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
                        None
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        activePatient: state.activePatient,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPatientRequirements}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientRequirementList);