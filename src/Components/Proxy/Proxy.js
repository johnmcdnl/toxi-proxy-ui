import React, { Component } from "react";
import Toxics from "../Toxic/Toxics";

class Proxy extends Component {
  render() {
    return (
      <div className="col">
        <div className="card text-center mb-3 mt-3">
          <div className="card-header">{this.props.data.name}</div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">
                Listen:{" "}
                <a href={this.props.data.listen}>{this.props.data.listen}</a>
              </li>
              <li className="list-group-item">
                Upstream:{" "}
                <a href={this.props.data.upstream}>
                  {this.props.data.upstream}
                </a>
              </li>
              <li className="list-group-item">
                Enabled: <a>{this.props.data.enabled}</a>
              </li>
            </ul>
          </div>
          <div className="card-footer text-muted">
            <Toxics toxics={this.props.data.toxics}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Proxy;
