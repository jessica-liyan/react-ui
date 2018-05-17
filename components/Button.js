import React from 'react'
import './styles/button.scss'
import classNames from 'classnames'

export class Button extends React.Component{
  constructor (props) {
    super(props)
  }

  render () {
    const {type, size, shape, round} = this.props
    const classes = classNames('btn', {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      [`btn-${shape}`]: shape,
      'btn-round': round
    })
    return (
      <button className={classes}>
        {this.props.children}
      </button>
    )
  }
}
