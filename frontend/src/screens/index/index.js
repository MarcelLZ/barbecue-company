import React, { Component } from 'react'

import DummyComponent from 'components/dummy'
import IHaveState from 'containers/i-have-state'
import SharedState from 'containers/shared-state'

import style from './style.styl'

class Index extends Component {
  render () {
    return (
      <div className={style.container}>
        <h1>Index Screen</h1>
        <h2>
          Hi! I'm a screen \o/ You can see my content
          because you are at route '/'
        </h2>

        <span>See some components examples:</span>
        <DummyComponent />
        <IHaveState />
        <SharedState />
      </div>
    )
  }
}

export default Index
