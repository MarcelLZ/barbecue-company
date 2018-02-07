import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'

import rules from './form-rules'

import style from './form.styl'

class NewAccountForm extends PureComponent {
  submit = (e) => {
    e.preventDefault()

    const { form, registerUser } = this.props

    form.validateFields((error, value) => {
      if (!error) registerUser({
        email: value.email,
        password: value.password
      })
    })
  }

  render () {
    const { getFieldProps, getFieldError } = this.props.form

    return (
      <form onSubmit={this.submit}>
        <Textfield
          {...getFieldProps('email', rules.email)}
          error={getFieldError('email')}
          type='email'
          label='E-mail'
          floatingLabel
        />

        <Textfield
          {...getFieldProps('password', rules.password)}
          error={getFieldError('password')}
          type='password'
          label='Senha'
          floatingLabel
        />
        <Textfield
          {...getFieldProps('repassword', rules.repassword)}
          error={getFieldError('repassword')}
          type='password'
          label='Repetir senha'
          floatingLabel
        />

        <div className={style.actions}>
          <Link to='/'>Go back</Link>
          <Button onClick={this.submit}>Cadastrar!</Button>
        </div>
      </form>
    )
  }
}

export default createForm()(NewAccountForm)
