import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '.'

describe('<LoginForm />', () => {
  it('should render correctly', () => {
    const component = (<LoginForm />)

    expect(shallow(component)).toMatchSnapshot()
  })

  // it('should be validated on submit')
})
