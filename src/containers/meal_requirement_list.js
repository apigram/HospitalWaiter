import React, {Component} from 'react'
import axios from 'axios';
import {MEAL_SERVICE_URL} from "../actions";

const listClasses = "badge requirement";

export default class MealRequirementList extends Component {
    constructor(props) {
        super(props);
        this.state = {requirements: []};
        const url = `${MEAL_SERVICE_URL}${props.requirements}`;
        axios.get(url)
            .then((response) => {
                this.setState({requirements: response.data.requirements})
            });
    }

    renderList() {
        return this.state.requirements.map((req) => {
            let typeClass = '';
            let scaleStr = '';
            switch (req.type) {
                case 'ALLERGEN':
                    typeClass = ' badge-danger';
                    break;
                case 'DIETARY_POSITIVE':
                    typeClass = ' badge-success';
                    break;
                case 'DIETARY_NEGATIVE':
                    typeClass = ' badge-warning';
                    break;
                default:
                    typeClass = '';
            }
            if (req.scale !== null) {
                scaleStr = ' (' + req.scale.slice(0, 1).toUpperCase() + req.scale.slice(1, req.scale.length).toLowerCase() + ')'
            }
            return (
                <div key={req.uri}
                    className={listClasses + typeClass}>{req.label}{scaleStr}</div>
            );
        })
    }

    render() {
        return (
            <div className="row">
                    {this.renderList()}
            </div>
        );
    }
}