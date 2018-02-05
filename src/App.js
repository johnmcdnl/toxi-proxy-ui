import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Proxies from './Components/Proxy/Proxies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Proxies></Proxies>
      </div>
    );
  }
}

export default App;
