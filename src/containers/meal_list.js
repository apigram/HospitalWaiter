import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectMeal, fetchMeals } from '../actions/index';
import { bindActionCreators } from 'redux';

class MealList extends Component {
  constructor(props) {
    super(props);
    this.props.fetchMeals()
  }
  renderList() {
    this.props.meals.map((meal) => {
      return (
        <li className="list-group-item" onClick={() => this.props.selectMeal(meal.id)}>{meal.label}</li>
      )
    });
  }
  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    meals: state.meals
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectMeal, fetchMeals}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MealList);