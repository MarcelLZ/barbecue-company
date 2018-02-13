import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Modal from '.'

describe('<Modal />', () => {
  const initialState = {}
  const mockStore = configureStore()
  let store, component

  beforeEach(() => {
    store = mockStore(initialState)
    component = shallow(
      <Modal store={store}>
        <span>I'm a son from my parent</span>
      </Modal>
    )
  })

  it('should render children when exists', () => {
    expect(component.find('span')).toHaveLength(1)
  })
})
