import React, { Component } from "react";
import Toxic from "./Toxic";

class Toxics extends Component {
  render() {
   
    let toxics = [];
    this.props.toxics.forEach(function(toxic) {
      toxics.push(
        <li key={toxic.name} className="list-group-item">
          <Toxic toxic={toxic}/>
        </li>
      );
    });

    return (
      <div className="row">
        <p className="mx-auto">
          Active Toxics <i className="far fa-plus-square" /> 
        </p>
        <div className="col">
          <ul className="list-group">{toxics}</ul>
        </div>
      </div>
    );
  }
}

export default Toxics;
