import React, { Component } from 'react'

import style from './style.styl'

class IHaveState extends Component {
  constructor (props) {
    super(props)
    this.state = {
      now: Date()
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ now: Date() })
    }, 1000)
  }

  render () {
    const { now } = this.state

    return (
      <span className={style.container}>
        Hi! I have a internal state! Look what I can do -> <strong>{ now }</strong>
      </span>
    )
  }
}

export default IHaveState
