// import axios from 'axios';
import config from "../Config";
import mocked from "./proxies.json";
import axios from "axios";

class GetProxies {
  constructor() {
    axios
      .get(config.GET_PROXIES_URL)
      .then(response => this.setState({ username: response.data.name }));

    this.data = { mocked };
    this.getData = this.getData.bind(this);
    console.log(mocked);
  }
}

export default GetProxies.GetData;
