import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from 'redux-flow/login/reducer'
import { SessionStorage } from 'utils/storage'

import rules from './form-rules'

import style from './form.styl'

class Formulario extends PureComponent {
  submit = (e) => {
    e.preventDefault()

    const { form, login, history } = this.props

    form.validateFields((error, value) => {
      if (error) return

      login(value.email, value.password)
        .then(token => SessionStorage.save('TOKEN', token))
        .then(() => history.push('/dashboard'))
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
          <Link to='/signup'>Registrar-se!</Link>
          <Button onClick={this.submit}>Login</Button>
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
const Form = createForm()(Formulario)
const connectedComponent = connect(null, mapDispatchToProps)(Form)
export default withRouter(connectedComponent)
