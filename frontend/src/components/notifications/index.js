import React from 'react'
import Notify from 'react-notify-toast'

import style from './notifications.styl'

const Notifications = () => (
  <div className={style.notificationContainer}>
    <Notify />
  </div>
)

export default Notifications
