import React from 'react'

export class Radio extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      chosen: this.props.chosen
    }
  }

  handleChange (value) {
    this.setState({
      chosen: value
    })
  }

  render () {
    return (
      <div>
        {
          this.props.options.map((item,index) => (
            <RadioItem key={index} value={item.value} chosen={this.state.chosen} change={this.handleChange.bind(this)}>{item.label}</RadioItem>
          ))
        }
      </div>
    )
  }
}

export class RadioItem extends React.Component{
  constructor (props) {
    super(props)
  }

  render(){
    return (
      <label>
        <input type="radio"
          checked={this.props.chosen === this.props.value}
          onChange={this.props.change.bind(this, this.props.value)}
        />
        {this.props.children}
      </label>
    )
  }
}