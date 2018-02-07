export default {
  email: {
    rules: [
      { required: true, message: 'Campo obrigatório' },
      { type: 'email', message: 'Email inválido' }
    ]
  },

  password: {
    rules: [
      { required: true, message: 'Campo obrigatório' }
    ]
  },

  repassword: {
    rules: [
      { required: true, message: 'Campo obrigatório' }
    ]
  }
}
