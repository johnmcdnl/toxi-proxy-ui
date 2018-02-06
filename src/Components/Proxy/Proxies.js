import React, { Component } from "react";
import Proxy from "./Proxy";
import config from "../../Service/Config";

class Proxies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proxies: []
    };
  }

  componentDidMount() {
    return fetch(config.BASE_URL + config.GET_PROXIES_URL)
      .then(response => response.json())
      .then(responseJson => {
        let proxies = [];
        for (let [name, data] of Object.entries(responseJson)) {
          proxies.push(
            <div key={name} className="col">
              <Proxy data={data} />
            </div>
          );
        }
        this.setState({ proxies: proxies });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return <div className="row">{this.state.proxies}</div>;
  }
}

export default Proxies;
