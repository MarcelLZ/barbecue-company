import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateDate } from 'redux-flow/counter/creators'

import style from './style.styl'

class SharedState extends PureComponent {
  componentDidMount () {
    const { updateDate } = this.props
    setInterval(() => updateDate(), 1000)
  }

  render () {
    let { now } = this.props

    return (
      <span className={style.container}>
        Hi! My state is coming from the Redux! Look -> <strong>{ now }</strong>
      </span>
    )
  }
}

const mapStateToProps = ({ counter }) => ({ now: counter.now })
const mapDispatchToProps = dispatch => bindActionCreators({ updateDate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(SharedState)
