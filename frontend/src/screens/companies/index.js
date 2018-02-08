import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllCompanies } from 'redux-flow/companies/reducer'

import Loading from 'components/loading'
import AppLayout from 'components/layout'
import CompaniesList from './companies-list'

class Companies extends PureComponent {
  componentDidMount () {
    const { getAllCompanies } = this.props
    getAllCompanies()
  }

  render () {
    const { isFetching, companies } = this.props

    return [
      <Loading key='loading' fetching={isFetching} />,
      <AppLayout key='dashboard'>
        <CompaniesList companies={companies} />
      </AppLayout>
    ]
  }
}

const mapStateToProps = ({ companies }) => ({ ...companies })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllCompanies }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Companies)
