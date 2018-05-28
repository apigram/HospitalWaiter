import React, {Component} from 'react';
import PatientDetail from './patient_detail'
import LoginForm from './login_form';
import MealList from './meal_list';
import {connect} from 'react-redux'
import '../app.css';

class App extends Component {
    render() {
        if (this.props.activeUser !== null) {
            return (
                <div className="App">
                    <h1>Hospital Waiter</h1>
                    <PatientDetail/>
                    <br/>
                    <MealList/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <h1>Hospital Waiter</h1>
                    <LoginForm/>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        activeUser: state.activeUser
    }
}

export default connect(mapStateToProps, null)(App);
