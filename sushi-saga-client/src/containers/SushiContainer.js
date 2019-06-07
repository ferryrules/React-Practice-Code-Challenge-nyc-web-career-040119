import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

export default class SushiContainer extends Component {

  state = {
    index: 4
  }

  sushi = () => this.props.sushi.map(s=>{
    return <Sushi id={s.id} name={s.name} img={s.img_url} price={s.price}/>
  }).splice(0,4)

  moreSushi = () => {
    let newIndex = this.state.index
    this.sushi.splice(this.state.index, 4)
    this.setState({
      index: newIndex+=4
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.sushi()}
          <MoreButton />
        </div>
      </Fragment>
    )
  }
}
