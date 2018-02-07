import React from 'react'
import { shallow } from 'enzyme'
import AppLayout from '.'

describe('<AppLayout />', () => {
  it('should render correctly', () => {
    const component = shallow(<AppLayout />)

    expect(component).toMatchSnapshot()
  })
})
