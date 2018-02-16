import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeModal } from 'redux-flow/ui/reducer'
import { newCompany, newCompanyError } from 'redux-flow/companies/reducer'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'
import { notify } from 'react-notify-toast'

import CNPJValidator from 'utils/cnpj-validator'
import Modal from 'components/modal'
import rules from './form-rules'

import style from './new-company.styl'

class CompanyForm extends PureComponent {
  submit = e => {
    e.preventDefault()

    const { form, newCompany, newCompanyError, closeModal } = this.props
    form.validateFields(async (error, values) => {
      if (error) return

      try {
        await newCompany({ name: values.name, cnpj: values.cnpj})
        closeModal()
        notify.show('Empresa cadastrada.', 'success')
      } catch (e) {
        newCompanyError()
        notify.show('Erro ao cadastrar empresa.', 'error')
      }
    })
  }

  checkCNPJ = (rule, value, callback) => {
    if (value && !CNPJValidator(value)) {
      callback('CNPJ inválido')
    } else {
      callback()
    }
  }

  render () {
    const { getFieldProps, getFieldDecorator, getFieldError } = this.props.form
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

          {getFieldDecorator('cnpj', { rules: [ ...rules.cnpj.rules, { validator: this.checkCNPJ } ] })(
            <Textfield
              error={getFieldError('cnpj')}
              label='CNPJ'
              floatingLabel
            />
          )}

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
  newCompany,
  newCompanyError
}, dispatch)
export default connect(null, mapDispatchToProps)(Form)
