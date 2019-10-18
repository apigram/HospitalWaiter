import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchPatientMeals, deleteMeal, AUTH_HEADER} from "../actions";
import {bindActionCreators} from 'redux';
import axios from 'axios';

class PatientMealList extends Component {
    constructor(props) {
        super(props);
        this.state = {meals: []};
        this.props.activePatient.meals.map((patient_meal) => {
            axios.get(patient_meal.meal, AUTH_HEADER)
                .then((response) => {
                    this.setState({
                        meals: [
                            ...this.state.meals, {
                                url: patient_meal.url,
                                label: response.data.label,
                                quantity: patient_meal.quantity
                            }]
                    })
                });
        });
    }
    renderList() {
        return this.state.meals.map((meal) => {
            return (
                <li key={meal.url}
                    className="list-group-item">
                    <div className="row">
                        <div className="col-sm-9 text-left">
                            {meal.label} ({meal.quantity})
                        </div>
                        <div className="col-sm-3">
                            <button type="button" className="close" onClick={() => this.props.deleteMeal(meal.url)}>&times;</button>
                        </div>
                    </div>
                </li>
            );
        })
    }

    render() {
        if (this.state.meals.length > 0) {
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
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteMeal}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientMealList);