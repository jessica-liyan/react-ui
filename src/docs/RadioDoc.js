import React from 'react'
import {Radio, RadioItem} from '../components/Radio'

export class RadioDoc extends React.Component{
  constructor (props) {
    super(props)
  }

  handleChange (value) {
    console.log('radio chosen', value)
  }

  render () {
    return (
      <div>
        <Radio chosen="sh" name="radio" onChange={this.handleChange.bind(this)}>
          <RadioItem value="bj">北京</RadioItem>
          <RadioItem value="sh">上海</RadioItem>
          <RadioItem value="gz">广州</RadioItem>
        </Radio>
      </div>
    )
  }
}