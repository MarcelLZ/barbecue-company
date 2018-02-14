import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import LoginForm from '.'

describe('<LoginForm />', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store, component

  beforeEach(() => {
    store = mockStore(initialState)
    component = shallow(<LoginForm store={store} />)
  })

  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })
})
