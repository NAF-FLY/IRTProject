import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  login,
  clearError,
  githubLogin,
  facebookLogin,
  googleLogin
} from 'redux/reducers'
import { LoginForm } from 'components'

const LoginFormContainer = ({
  className,
  isLoading,
  hasError,
  login,
  clearError
}) => {
  const history = useHistory()

  const redirectWrapper = async (fn) => {
    await fn()
    history.push('/tasks')
  }

  const githubLoginHandler = () => redirectWrapper(githubLogin)
  const googleLoginHandler = () => redirectWrapper(googleLogin)
  const facebookLoginHandler = () => redirectWrapper(facebookLogin)

  const submitHandler = async ({ email, password }) => {
    await login(email, password)
    history.push('/tasks')
  }

  return (
    <LoginForm
      className={className}
      isLoading={isLoading}
      onSubmit={submitHandler}
      hasError={hasError}
      clearError={clearError}
      githubLogin={githubLoginHandler}
      facebookLogin={facebookLoginHandler}
      googleLogin={googleLoginHandler}
    />
  )
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  hasError: state.auth.hasError
})

export default connect(mapStateToProps, {
  login,
  clearError,
  githubLogin,
  facebookLogin,
  googleLogin
})(LoginFormContainer)
