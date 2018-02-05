import React, { Component } from "react";

class Toxic extends Component {
  render() {   
    let attributes = [];
    for (let [key, value] of Object.entries(this.props.toxic.attributes)) {
      attributes.push(
        <li key={key} className="list-group-item">{key}: {value}</li>
      );
    }

    return (
      <div className="card text-center">
        <div className="card-header">
          {this.props.toxic.name} <i className="fas fa-pause"></i> <i className="far fa-window-close" /> 
          <ul className="list-group">
              <li className="list-group-item">Type: {this.props.toxic.type}</li>
              <li className="list-group-item">Stream: {this.props.toxic.stream}</li>
              <li className="list-group-item">Toxicity: {this.props.toxic.toxicity}</li>
              {attributes}
            </ul>
        </div>
      </div>
    );
  }
}

export default Toxic;
