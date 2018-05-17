import React from 'react'
import {Switch} from '@/Switch'

export class SwitchDoc extends React.Component{
  constructor (props) {
    super(props)
  }

  handleChange(value){
    console.log('switch chosen', value)
  }

  render () {
    return (
      <div>
        <Switch value={true} onChange={this.handleChange.bind(this)}></Switch>
      </div>
    )
  }
}