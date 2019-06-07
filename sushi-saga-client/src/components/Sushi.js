import React, { Component, Fragment } from 'react'

export default class Sushi extends Component {

  state = {
    eaten: false
  }

  eatSushi = () => {
    this.setState({ eaten: true })
  }

  render(){
    console.log("sushi", this.props.sushi);
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.eatSushi}>
          {this.state.eaten ? null : <img src={this.props.img} alt={this.props.name} width="100%" />}
        </div>
        <h4 className="sushi-details">
          {this.props.name} - {this.props.price}
        </h4>
      </div>
    )
  }
}
