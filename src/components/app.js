import React, { Component } from 'react';
import PatientDetail from '../containers/patient_detail'
import MealList from '../containers/meal_list';
import '../app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hospital Waiter</h1>
          <PatientDetail/>
          <MealList/>
      </div>
    );
  }
}

export default App;
