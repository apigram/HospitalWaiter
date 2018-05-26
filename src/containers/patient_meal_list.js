import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPatientMeals} from "../actions";
import {bindActionCreators} from 'redux';

class PatientMealList extends Component {
    renderList() {
        return this.props.patientMeals.map((meal) => {
            return (
                <li key={meal.uri}
                    className="list-group-item">{meal.label}</li>
            );
        })
    }

    render() {
        if (this.props.patientMeals.length > 0) {
            return (
                <div className="card bg-light text-dark">
                    <h3 className="card-header"
                        onClick={() => this.props.fetchPatientMeals(this.props.activePatient.meals)}>Selected Meals
                    </h3>
                    <ul className="list-group list-group-flush requirement-list">
                        {this.renderList()}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="card bg-light text-dark">
                    <h3 className="card-header">Selected Meals</h3>
                    <div className="card-body">
                        <button onClick={() => this.props.fetchPatientMeals(this.props.activePatient.meals)}>
                            Show Meals
                        </button>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        activePatient: state.activePatient,
        patientMeals: state.patientMeals
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchPatientMeals}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientMealList);