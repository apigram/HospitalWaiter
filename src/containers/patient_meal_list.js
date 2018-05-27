import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPatientMeals, deleteMeal} from "../actions";
import {bindActionCreators} from 'redux';

class PatientMealList extends Component {
    constructor(props) {
        super(props);
        this.props.fetchPatientMeals(this.props.activePatient.meals)
    }
    renderList() {
        return this.props.patientMeals.map((meal) => {
            return (
                <li key={meal.uri}
                    className="list-group-item">
                    <div className="row">
                        <div className="col-sm-10">
                            {meal.label} ({meal.quantity})
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.deleteMeal(meal.patient_meal)}>-</button>
                        </div>
                    </div>
                </li>
            );
        })
    }

    render() {
        if (this.props.patientMeals.length > 0) {
            return (
                <div className="card bg-light text-dark">
                    <h3 className="card-header">Selected Meals</h3>
                    <ul className="list-group list-group-flush requirement-list">
                        {this.renderList()}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="card bg-light text-dark">
                    <h3 className="card-header">Selected Meals</h3>
                    <div className="card-body">None</div>
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
    return bindActionCreators({fetchPatientMeals, deleteMeal}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientMealList);