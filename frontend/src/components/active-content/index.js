import React from 'react'

const ActiveContent = ({ active, children }) => (
  <React.Fragment>
    { React.Children.map(children, (element, key) => key === active && element) }
  </React.Fragment>
)

export default ActiveContent
