import React from 'react'
import {Button} from '../components/Button'
import './demo.scss'

export class ButtonDoc extends React.Component{
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="demo">
        <div>
          <Button>type-default</Button>
          <Button type="primary">type-primary</Button>
          <Button type="dashed">type-dashed</Button>
        </div>
        <div>
          <Button size="large">size-large</Button>
          <Button>size-default</Button>
          <Button size="small">size-small</Button>
          <Button size="mini">size-mini</Button>
        </div>
        <div>
          <Button size="large" round>size-large</Button>
          <Button size="default" round>size-default</Button>
          <Button size="small" round>size-small</Button>
          <Button size="mini" round>size-mini</Button>
        </div>
      </div>
    )
  }
}


