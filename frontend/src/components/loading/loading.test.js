import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import Loading from '.'

describe('<Loading />', () => {
  it('should render a <Spinner /> when is fetching', () => {
    const wrapper = shallow(<Loading fetching />)
    const spinner = wrapper.find('Spinner')

    expect(spinner).to.have.length(1)
  })

  it('should not have a <Spinner /> when is not fetching', () => {
    const wrapper = shallow(<Loading />)
    const spinner = wrapper.find('Spinner')

    expect(spinner).to.have.length(0)
  })
})
