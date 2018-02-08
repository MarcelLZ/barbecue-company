import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Dialog, DialogContent } from 'react-mdl'

const Modal = ({ show, children }) => (
  <Dialog open={show}>
    <DialogContent>
      { children }
    </DialogContent>
  </Dialog>
)

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired
}

Modal.defaultProps = {
  show: false
}

const mapStateToProps = ({ ui }) => (({ ...ui }))
export default connect(mapStateToProps)(Modal)
