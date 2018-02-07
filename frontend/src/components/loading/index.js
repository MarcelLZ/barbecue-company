import React from 'react'
import { Spinner } from 'react-mdl'

import style from './loading.styl'

const Loading = ({ fetching }) =>
  fetching
    ? (<div className={style.container}><Spinner /></div>)
    : (<span />)

export default Loading
