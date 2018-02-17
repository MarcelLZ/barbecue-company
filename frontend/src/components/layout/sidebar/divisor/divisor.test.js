import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Divisor from '.'

describe('<Divisor />', () => {
  it('should has a .divisor class', () => {
    const wrapper = shallow(<Divisor />)

    expect(wrapper.find('.divisor')).to.exist
  })
})
