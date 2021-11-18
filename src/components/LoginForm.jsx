import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Alert, Tooltip } from 'antd'

import { required, min, isEmail } from 'utils'
import { MailOutlinedIcon, LockOutlinedIcon, GoogleIcon } from 'icons'

export const LoginForm = ({
  hasError,
  isLoading,
  className,
  onSubmit,
  clearError,
  githubLogin,
  facebookLogin,
  googleLogin
}) => (
  <Form
    name='login-form'
    className={cn('auth-form', className)}
    onFinish={onSubmit}
    size='large'
  >
    {hasError && (
      <Form.Item>
        <Alert message={'User is not found'} type='error' showIcon />
      </Form.Item>
    )}

    <Form.Item
      name='email'
      rules={[
        required('Please enter your email!'),
        isEmail('Please enter a valid E-mail')
      ]}
    >
      <Input prefix={<MailOutlinedIcon />} type='email' placeholder='E-mail' />
    </Form.Item>
    <Form.Item
      name='password'
      rules={[
        required('Please enter your password!'),
        min(6, 'Minimum password length 6 characters')
      ]}
    >
      <Input.Password
        prefix={<LockOutlinedIcon />}
        type='password'
        placeholder='Password'
      />
    </Form.Item>

    <div className='auth-form__btn-wrap'>
      <Button
        type='primary'
        className='auth-form__btn'
        htmlType='submit'
        loading={isLoading}
      >
        Login
      </Button>
    </div>

    <div className='auth-form__social-auth'>
      <Tooltip title={'Login with Google'}>
        <Button shape='circle' icon={<GoogleIcon />} onClick={googleLogin} />
      </Tooltip>
    </div>

    <Link to='/register' onClick={clearError}>
      <Button type='link' className='auth-form__btn'>
        Register now
      </Button>
    </Link>
  </Form>
)
