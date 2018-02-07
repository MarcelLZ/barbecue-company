import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'

import rules from './form-rules'

import style from './form.styl'

class Formulario extends PureComponent {
  submit = (e) => {
    e.preventDefault()

    const { form, login } = this.props

    form.validateFields((error, value) => {
      if (!error) login({
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

        <div className={style.actions}>
          <Link to='/new-account'>Registrarse!</Link>
          <Button onClick={this.submit}>Login</Button>
        </div>
      </form>
    )
  }
}

export default createForm()(Formulario)
