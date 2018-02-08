import React from 'react'
import { FABButton, Icon } from 'react-mdl'

import style from './add-button.styl'

const AddButton = ({ onClick }) => (
  <FABButton colored className={style.addButton} onClick={onClick}>
    <Icon name='add' />
  </FABButton>
)

export default AddButton
