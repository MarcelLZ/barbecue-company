import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closeModal } from 'redux-flow/ui/reducer'
import { addOrderItem } from 'redux-flow/orders/reducer'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'

import { SelectField, Option } from '@marcellz/react-select-field'
import Modal from 'components/modal'
import rules from './form-rules'

import style from './new-order.styl'

class OrderForm extends PureComponent {
  submit = e => {
    e.preventDefault()

    const { form, addOrderItem } = this.props
    form.validateFields((error, values) => {
      if (!error) addOrderItem({
        id: Math.random(),
        description: values.item,
        ...values
      })
    })
  }

  render () {
    const { getFieldProps, getFieldError } = this.props.form
    const { closeModal } = this.props

    return (
      <Modal>
        <form onSubmit={this.submit}>
          <SelectField
            {...getFieldProps('company', rules.company)}
            error={getFieldError('company')}
            label='Empresa'
          >
            <Option>Empresa 1</Option>
            <Option>Empresa 2</Option>
            <Option>Empresa 3</Option>
          </SelectField>

          <SelectField
            {...getFieldProps('item', rules.item)}
            error={getFieldError('item')}
            label='Produto'
          >
            <Option>Produto 1</Option>
            <Option>Produto 2</Option>
            <Option>Produto 3</Option>
          </SelectField>

          <Textfield
            {...getFieldProps('quantity', rules.quantity)}
            error={getFieldError('quantity')}
            label='Quantidade'
            floatingLabel
          />

          <Button type='reset' onClick={closeModal}>Cancelar</Button>
          <Button onClick={this.submit} accent>Adicionar</Button>
        </form>
      </Modal>
    )
  }
}

const Form = createForm()(OrderForm)
const mapDispatchToProps = dispatch => bindActionCreators({
  closeModal,
  addOrderItem
}, dispatch)
export default connect(null, mapDispatchToProps)(Form)
