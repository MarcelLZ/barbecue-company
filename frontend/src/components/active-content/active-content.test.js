import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect } from 'chai'

import ActiveContent from '.'

describe('<ActiveContent />', () => {
  it('should have the "active" prop the value 0 when not defined', () => {
    const wrapper = mount(
      <ActiveContent>
        <span>Whatever</span>
      </ActiveContent>
    )

    expect(wrapper.prop('active')).to.equal(0)
  })

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <ActiveContent>
        <span>Whatever</span>
      </ActiveContent>
    )

    expect(wrapper.find('span')).to.have.length(1)
  })

  it('should render the activated content', () => {
    const wrapper = shallow(
      <ActiveContent active={1}>
        <span>Whatever</span>
        <span>Another thing</span>
      </ActiveContent>
    )

    expect(wrapper.find('span')).to.have.length(1)
    expect(wrapper.find('span').text('Another thing')).to.exist
  })
})
