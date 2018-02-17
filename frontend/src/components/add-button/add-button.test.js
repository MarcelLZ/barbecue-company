import React from 'react'
import { shallow } from 'enzyme'

import AddButton from '.'

describe('<AddButton>', () => {
  it('should call onClick when button is clicked', () => {
    const onClick = jest.fn()

    const wrapper = shallow(<AddButton onClick={onClick} />)
    wrapper.find('FABButton').simulate('click')

    expect(onClick).toHaveBeenCalled()
  })
})
