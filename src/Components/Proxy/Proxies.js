import React, { Component } from "react";
import Proxy from "./Proxy";
import config from "../../Service/Config";
import axios from "axios";

class Proxies extends Component {
  render(async) {
    let proxies = [];
    await axios
      .get(config.BASE_URL + config.GET_PROXIES_URL)
      .then(function(response) {
        console.log(response.data);
        for (let [name, data] of Object.entries(response.data)) {
          console.log("something ",name, data);
          proxies.push(
            <div className="col" >
              <Proxy data={data} />
            </div>
          );
        }
      })
      .catch(function(error) {
        console.log(error);
      });
      console.log("Proxies: ", proxies);
    return <div className="row">{proxies}</div>;
  }
}

export default Proxies;
