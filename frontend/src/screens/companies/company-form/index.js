import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeModal } from 'redux-flow/ui/reducer'
import { newCompany } from 'redux-flow/companies/reducer'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'

import Modal from 'components/modal'
import rules from './form-rules'

import style from './new-company.styl'

class CompanyForm extends PureComponent {
  submit = e => {
    e.preventDefault()

    const { form, newCompany, closeModal } = this.props
    form.validateFields((error, values) => {
      if (!error) newCompany({
        name: values.name,
        cnpj: values.cnpj
      }).then(closeModal)
    })
  }

  render () {
    const { getFieldProps, getFieldError } = this.props.form
    const { closeModal } = this.props

    return (
      <Modal>
        <form onSubmit={this.submit}>
          <Textfield
            {...getFieldProps('name', rules.name)}
            error={getFieldError('name')}
            label='Nome'
            floatingLabel
          />
          <Textfield
            {...getFieldProps('cnpj', rules.cnpj)}
            error={getFieldError('cnpj')}
            label='CNPJ'
            floatingLabel
            pattern='-?[0-9]*(\.[0-9]+)?'
          />

          <div className={style.actions}>
            <Button type='reset' onClick={closeModal}>Cancelar</Button>
            <Button onClick={this.submit}>Salvar</Button>
          </div>
        </form>
      </Modal>
    )
  }
}

const Form = createForm()(CompanyForm)
const mapDispatchToProps = dispatch => bindActionCreators({
  closeModal,
  newCompany
}, dispatch)
export default connect(null, mapDispatchToProps)(Form)
