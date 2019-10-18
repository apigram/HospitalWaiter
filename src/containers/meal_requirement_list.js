import React, {Component} from 'react'
import axios from 'axios';
import {AUTH_HEADER} from "../actions";

const listClasses = "badge requirement";

export default class MealRequirementList extends Component {
    constructor(props) {
        super(props);
        this.state = {requirements: []};
        this.props.requirements.map((req) => {
            axios.get(req.requirement, AUTH_HEADER)
                .then((response) => {
                    console.log(response);
                    let scaleStr = '';
                    if (req.scale !== null) {
                        scaleStr = ' (' + req.scale.slice(0, 1).toUpperCase() + req.scale.slice(1, req.scale.length).toLowerCase() + ')'
                    }
                    this.setState({requirements: [...this.state.requirements, {
                        url: req.url,
                        type: response.data.type,
                        label: response.data.label,
                        scale: scaleStr
                    }]
                    });
            })
        })
    }

    renderList() {
        return this.state.requirements.map((req) => {
            let typeClass = '';
            switch (req.type) {
                case 'Allergen':
                    typeClass = ' badge-danger';
                    break;
                case 'Positive':
                    typeClass = ' badge-success';
                    break;
                case 'Negative':
                    typeClass = ' badge-warning';
                    break;
                default:
                    typeClass = '';
            }
            return (
                <div key={req.url}
                 className={listClasses + typeClass}>{req.label}{req.scale}
                </div>
            )
        });
    }

    render() {
        return (
            <div className="row">
                    {this.renderList()}
            </div>
        );
    }
}