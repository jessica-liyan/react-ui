import React from 'react'
import '../styles/checkbox.scss'

export class Checkbox extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      chosen: this.props.chosen
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    let newChosen = this.state.chosen
    if (newChosen.findIndex(x => x === value) > -1) {
      newChosen.splice(newChosen.findIndex(x => x === value), 1)
    } else {
      newChosen.push(value)
    }
    this.setState({
      chosen: newChosen
    })
    this.props.onChange(this.state.chosen)
  }

  render () {
    return (
      <div className="checkbox">
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

export class CheckboxItem extends React.Component{
  constructor (props) {
    super(props)
  }

  render(){
    return (
      <label className="checkbox-item">
        <input type="checkbox" name={this.props.name}
        checked={this.props.chosen.findIndex(x => x === this.props.value) > -1}
        onChange={this.props.change.bind(this, this.props.value)}/>
        <span></span>
        {this.props.children} 
      </label>
    )
  }
}
