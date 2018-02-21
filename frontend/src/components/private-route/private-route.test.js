import React from 'react'
import { shallow } from 'enzyme'
import { SessionStorage } from 'utils/storage'

import PrivateRoute from '.'

describe('<PrivateRoute />', () => {
  xit('should not render the given component because is not authenticaded', () => {
    jest.mock('utils/storage', () => ({ storage: '' }))

    const get = jest.fn()
    SessionStorage.mockImplementationOne(() => ({ get }))

    const wrapper = shallow(<PrivateRoute />)

    expect(get).toHaveBeenCalled()
  })

  it('should render the given component if authenticaded', () => {})
})
