import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

import NavigationItem from '.'

describe('<NavigationItem />', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      to: '/',
      icon: 'add',
      description: 'sample'
    }

    wrapper = shallow(
      <NavigationItem
        to={props.to}
        icon={props.icon}
        description={props.description}
      />
    )
  })

  it('should has a "to" value matching with the prop', () => {
    expect(wrapper.prop('to')).to.be.equal(props.to)
  })

  it('should has an icon', () => {
    const icon = wrapper.find('Icon')

    expect(icon).to.exist
    expect(icon.prop('name')).to.be.equal(props.icon)
  })

  it('should has a "description" value matching with the prop', () => {
    const link = wrapper.find('Link').childAt(1)

    expect(link.text()).to.be.equal(props.description)
  })
})
