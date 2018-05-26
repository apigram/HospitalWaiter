import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectMeal, fetchMeals } from '../actions/index';
import { bindActionCreators } from 'redux';

class MealList extends Component {
  componentDidMount() {
    this.props.fetchMeals();
  }
  renderList() {
    return this.props.meals.map((meal) => {
      return (
        <li key={meal.uri} className="list-group-item meal sm-4" onClick={() => this.props.selectMeal(meal.uri)}>{meal.label} - {meal.current_quantity} remaining</li>
      )
    });
  }

  render() {
    return (
        <section className="meal-list">
            <h2>Today's Meals</h2>
            <ul className="list-group meal-list">
                {this.renderList()}
            </ul>
        </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    meals: state.meals
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMeal, fetchMeals}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MealList);