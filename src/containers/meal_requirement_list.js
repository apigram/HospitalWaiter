import React from 'react'

const listClasses = "list-group-item requirement";

function renderList(requirements) {
    return requirements.map((req) => {
        let typeClass = '';
        let scaleStr = '';
        switch (req.type) {
            case 'ALLERGEN':
                typeClass = ' list-group-item-danger';
                break;
            case 'DIETARY_POSITIVE':
                typeClass = ' list-group-item-success';
                break;
            case 'DIETARY_NEGATIVE':
                typeClass = ' list-group-item-warning';
                break;
            default:
                typeClass = '';
        }
        if (req.scale !== null) {
            scaleStr = ' (' + req.scale.slice(0, 1).toUpperCase() + req.scale.slice(1, req.scale.length).toLowerCase() + ')'
        }
        return (
            <li key={req.uri}
                className={listClasses + typeClass}>{req.label}{scaleStr}</li>
        );
    })
}

export default function render(props) {
    props.promise.then((response) => {
        return (
            <div className="card bg-light text-dark">
                <h3 className="card-header">Dietary Warnings</h3>
                <ul className="list-group list-group-flush requirement-list">
                    {renderList(response.data.requirements)}
                </ul>
            </div>
        );
    });
    return (
        <div className="card bg-light text-dark">None</div>
    );
}