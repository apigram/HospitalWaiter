import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMeal, fetchMeals} from '../actions/index';
import {bindActionCreators} from 'redux';

class MealList extends Component {
    componentDidMount() {
        this.props.fetchMeals();
    }

    renderList() {
        return this.props.meals.map((meal) => {
            return (
                <li key={meal.uri} className="list-group-item meal"
                    onClick={() => this.props.selectMeal(meal.patient_meal, meal.id)}>{meal.label} - {meal.current_quantity} remaining</li>
            )
        });
    }

    render() {
        return (
            <div className="card text-dark bg-light meal-list">
                <h2 className="card-header">Today's Meals</h2>
                <ul className="list-group list-group-flush meal-list">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activePatient: state.activePatient,
        meals: state.meals
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMeal, fetchMeals}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MealList);