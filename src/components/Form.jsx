import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
  }
  state = {
   name: ''   
  }
  render() {
    return (
      <div>
        <input 
          type={this.props.type}
          placeholder={this.props.placeholder} />
      </div>
    )
  }
}
