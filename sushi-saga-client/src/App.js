import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: []
  }

  componentDidMount = () => {
    fetch(API)
    .then(r=>r.json())
    .then(sushi=>{
      this.setState({
        sushi
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi}/>
        <Table />
      </div>
    );
  }
}

export default App
