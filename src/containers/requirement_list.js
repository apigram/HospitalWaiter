import React, {Component} from 'react';
import {connect} from 'react-redux'
class RequirementList extends Component {
  renderList() {
    return this.props.requirements.map((req) => {
      return (
        <li className="list-group-item requirement">{req.label} ({req.scale})</li>
      );
    })
  }
  render(){
    return (
      <ul className="list-group requirement-list">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    requirements: state.requirements
  }
}

export default connect(mapStateToProps, null)(RequirementList);