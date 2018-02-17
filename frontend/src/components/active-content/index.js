import React from 'react'
import PropTypes from 'prop-types'

const ActiveContent = ({ active, children }) => (
  <React.Fragment>
    { React.Children.map(children, (element, key) => key === active && element) }
  </React.Fragment>
)

ActiveContent.propTypes = {
  active: PropTypes.number,
  children: PropTypes.node
}

ActiveContent.defaultProps = {
  active: 0
}

export default ActiveContent
