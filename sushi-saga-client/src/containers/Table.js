import React, { Component, Fragment } from 'react'

export default class Table extends Component {

  state = {
    money: 100
  }

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${ /* Give me how much money I have left */ } remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              /*
                 renderPlates takes an array
                 and renders an empty plate
                 for every element in the array
              */
              this.renderPlates([])
            }
          </div>
        </div>
      </Fragment>
    )
  }
}
