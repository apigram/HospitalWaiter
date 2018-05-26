import React, {Component} from 'react';
import {connect} from 'react-redux'

class RequirementList extends Component {
    renderList() {

        return this.props.patientRequirements.map((req) => {
            return (
                <li className="list-group-item requirement">{req.label} ({req.scale})</li>
            );
        })
    }

    render() {
        if (this.props.patientRequirements.length !== 0) {
            return (
                <ul className="list-group requirement-list">
                    {this.renderList()}
                </ul>
            )
        } else {
            return (<p>None</p>);
        }
    }
}

function mapStateToProps(state) {
    return {
        patientRequirements: state.patientRequirements
    }
}

export default connect(mapStateToProps, null)(RequirementList);