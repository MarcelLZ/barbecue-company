import React from 'react'
import { shallow } from 'enzyme'

import Sidebar from '.'

describe('<Sidebar />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Sidebar />)

    expect(wrapper).toMatchSnapshot()
  })
})
