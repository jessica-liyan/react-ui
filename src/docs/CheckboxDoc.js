import React from 'react'
import {Checkbox, CheckboxItem} from '../components/Checkbox'

export class CheckboxDoc extends React.Component{
  constructor (props) {
    super(props)
  }

  handleChange(value){
    console.log('checkbox chosen', value)
  }

  render () {
    return (
      <div>
        <Checkbox chosen={['bj', 'sh']} name="checkbox" onChange={this.handleChange.bind(this)}>
          <CheckboxItem value="bj">北京</CheckboxItem>
          <CheckboxItem value="sh">上海</CheckboxItem>
          <CheckboxItem value="gz">广州</CheckboxItem>
        </Checkbox>
      </div>
    )
  }
}