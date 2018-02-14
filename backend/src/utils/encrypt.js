import { createHmac } from 'crypto'
import config from '../../config'

export default value => {
  return createHmac('sha256', config.secretToken)
    .update(value)
    .digest('hex')
}
