import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signup } from 'redux-flow/signup/reducer'

import rules from './form-rules'

import style from './form.styl'

class NewAccountForm extends PureComponent {
  submit = (e) => {
    e.preventDefault()

    const { form, signup, history } = this.props

    form.validateFields((error, value) => {
      if (!error) signup(
        value.email,
        value.password
      ).then(() => history.push('/'))
    })
  }

  checkPassword = (rule, value, callback) => {
    const { form } = this.props

    if (value && value !== form.getFieldValue('password')) {
      callback('A senha deve ser igual')
    } else {
      callback()
    }
  }

  render () {
    const { getFieldProps, getFieldDecorator, getFieldError } = this.props.form

    return (
      <form onSubmit={this.submit}>
        <Textfield
          {...getFieldProps('email', rules.email)}
          error={getFieldError('email')}
          type='email'
          label='E-mail'
          floatingLabel
        />

        {getFieldDecorator('password', { rules: [ ...rules.repassword.rules, { validator: this.checkPassword } ] })(
          <Textfield
            error={getFieldError('password')}
            type='password'
            label='Senha'
            floatingLabel
          />
        )}
        {getFieldDecorator('repassword', { rules: [ ...rules.repassword.rules, { validator: this.checkPassword } ] })(
          <Textfield
            error={getFieldError('repassword')}
            type='password'
            label='Repetir senha'
            floatingLabel
          />
        )}

        <div className={style.actions}>
          <Link to='/'>Voltar</Link>
          <Button onClick={this.submit}>Cadastrar!</Button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch)
const Form = createForm()(NewAccountForm)
const connectedComponent = connect(null, mapDispatchToProps)(Form)
export default withRouter(connectedComponent)
