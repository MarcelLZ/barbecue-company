import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Option from './option'

import style from './select.styl'

class SelectField extends PureComponent {
  render () {
    const { label, children, ...rest } = this.props

    return (
      <div className={style.container}>
        <select {...rest} className={style.select}>
          <Option />
          { children }
        </select>
        <span className={style.highlight} />
        <span className={style.selectBar} />
        <label className={style.label}>{ label }</label>
      </div>
    )
  }
}

SelectField.propTypes = {
  label: PropTypes.string.isRequired
}

export default SelectField
