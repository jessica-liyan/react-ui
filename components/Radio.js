import React from 'react'
import './styles/radio.scss'

export class Radio extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      chosen: this.props.chosen
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    this.setState({
      chosen: value
    })
    this.props.onChange(value)
  }

  // 将name属性添加到每个child组件props对象上
  render () {
    return (
      <div className="radio">
        {
          React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
              name: this.props.name,
              chosen: this.state.chosen,
              change: this.handleChange
            })
          })
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
      <label className="radio-item">
        <input type="radio" name={this.props.name}
        checked={this.props.value === this.props.chosen}
        onChange={this.props.change.bind(this, this.props.value)}/>
        <span></span>
        {this.props.children} 
      </label>
    )
  }
}