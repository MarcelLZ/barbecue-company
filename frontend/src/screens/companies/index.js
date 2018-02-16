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

    return (
      <React.Fragment>
        <Loading fetching={isFetching} />
        <CompanyForm />
        <AddButton onClick={openModal} />

        <AppLayout>
          <CompaniesList companies={companies} />
        </AppLayout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ companies }) => ({ ...companies })
const mapDispatchToProps = dispatch => bindActionCreators({ getAllCompanies, openModal }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Companies)
