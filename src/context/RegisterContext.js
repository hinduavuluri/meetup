import React from 'react'

const RegisterContext = React.createContext({
  isRegister: false,
  changeRegistrationStatus: () => {},
  name: '',
  updateName: () => {},
  topic: '',
  updateTopic: () => {},
  registerErr: false,
  updateErr: () => {},
})

export default RegisterContext
