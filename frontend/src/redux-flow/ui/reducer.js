import { OPEN_MODAL, CLOSE_MODAL } from './actions'

export const openModal = () => dispatch =>
  dispatch({ type: OPEN_MODAL })

export const closeModal = () => dispatch =>
  dispatch({ type: CLOSE_MODAL })
