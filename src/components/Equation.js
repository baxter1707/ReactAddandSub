import React, { Component } from 'react';
export class Equation extends Component {

constructor(props){
  super(props)

  this.incrementClicked = this.incrementClicked.bind(this)
  this.decreaseClicked = this.decreaseClicked.bind(this)
}

incrementClicked() {
  let value = parseInt(this.integerValue.innerHTML)
  let newValue = value += 1
  this.integerValue.innerHTML = newValue


}

decreaseClicked() {
  let value = parseInt(this.integerValue.innerHTML)
  let newValue = value -= 1
  this.integerValue.innerHTML = newValue
}




  render(){
    return (
      <div>
      <h1> Increasing and Decreasing </h1>
      <h3 onClick={this.incrementClicked} ref={(element) => this.addOne = element}> + </h3>
      <h3 ref={(element) => this.integerValue = element}> 0 </h3>
      <h3 onClick={this.decreaseClicked} ref={(subtract) => this.subone = subtract}> - </h3>

      </div>

    )
  }
}
