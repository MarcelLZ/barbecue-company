import React from 'react'
import { shallow } from 'enzyme'
import Modal from '.'

describe('<Modal />', () => {
  it('should render children when exists', () => {
    const component = shallow(
      <Modal>
        <span>I'm a son from my parent</span>
      </Modal>
    )

    expect(component.find('span')).toHaveLength(1)
  })
})
