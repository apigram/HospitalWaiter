import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectMeal, fetchMeals} from '../actions/index';
import {bindActionCreators} from 'redux';
import MealRequirementList from './meal_requirement_list';


class MealList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchMeals();
    }

    renderList() {
        return this.props.meals.map((meal) => {
            return (
                <li key={meal.uri} className="list-group-item meal">
                    <div className="row">
                        <div className="col-sm-11">
                            {meal.label} - {meal.current_quantity} remaining
                        </div>
                        <div className="col-sm-1">
                            <button type="button" className="btn btn-success" onClick={() => this.props.selectMeal(this.props.activePatient.meals, meal.id)}>+</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <MealRequirementList requirements={meal.requirements}/>
                        </div>
                    </div>
                </li>
            );
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