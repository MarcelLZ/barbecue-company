import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllCompanies } from 'redux-flow/companies/reducer'
import { openModal } from 'redux-flow/ui/reducer'

import Loading from 'components/loading'
import AppLayout from 'components/layout'
import CompaniesList from './companies-list'
import CompanyForm from './company-form'
import AddButton from 'components/add-button'

class Companies extends PureComponent {
  componentDidMount () {
    const { getAllCompanies } = this.props
    getAllCompanies()
  }

  render () {
    const { isFetching, companies, openModal } = this.props

    return [
      <Loading key='loading' fetching={isFetching} />,
      <CompanyForm key='company-form' />,
      <AddButton key='add-company' onClick={openModal} />,
      <AppLayout key='companies'>
        <CompaniesList companies={companies} />
      </AppLayout>
    ]
  }
}

const mapStateToProps = ({ companies }) => ({ ...companies })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllCompanies, openModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Companies)
