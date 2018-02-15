import React, { PureComponent } from 'react'
import { createForm } from 'rc-form'
import { Textfield, Button } from 'react-mdl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateProfile } from 'redux-flow/profile/reducer'

import rules from './form-rules'

import style from './form.styl'

class ProfileForm extends PureComponent {
  submit = (e) => {
    e.preventDefault()

    const { form, updateProfile } = this.props

    form.validateFields((error, value) => {
      if (!error) updateProfile(
        value.password
      )
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
    const { getFieldDecorator, getFieldError } = this.props.form

    return (
      <form onSubmit={this.submit}>
        <div className={style.passwords}>
          {getFieldDecorator('password', { rules: [ ...rules.password.rules, { validator: this.checkPassword } ] })(
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

          <Button raised ripple onClick={this.submit}>
            Alterar dados
          </Button>
        </div>
      </form>
    )
  }
}

const Form = createForm()(ProfileForm)
const mapDispatchToProps = dispatch => bindActionCreators({ updateProfile }, dispatch)
export default connect(null, mapDispatchToProps)(Form)
