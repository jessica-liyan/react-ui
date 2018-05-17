import React from 'react'
import '../styles/switch.scss'

export class Switch extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  handleChange(e){
    this.setState({
      value: e.target.checked
    })
    this.props.onChange(e.target.checked)
  }

  render () {
    return (
      <label className="switch">
        <input type="checkbox" checked={this.state.value} onChange={this.handleChange.bind(this)}/>
        <span></span>
      </label>
    )
  }
}