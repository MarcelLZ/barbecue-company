import React from 'react'
import { mount } from 'enzyme'

import Notifications from '.'

describe('<Notifications />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<Notifications />)

    expect(wrapper).toMatchSnapshot()
  })
})
