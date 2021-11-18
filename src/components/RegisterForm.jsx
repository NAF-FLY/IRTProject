import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Alert } from 'antd'

import { required, min, confirm, isEmail } from 'utils'
import { MailOutlinedIcon, LockOutlinedIcon } from 'icons'

export const RegisterForm = ({
  hasError,
  isLoading,
  className,
  onSubmit,
  clearError
}) => (
  <Form
    name='register-form'
    className={cn('auth-form', className)}
    onFinish={onSubmit}
    size='large'
  >
    {hasError && (
      <Form.Item>
        <Alert
          message={'An account with this E-mail already exists'}
          type='error'
          showIcon
        />
      </Form.Item>
    )}

    <Form.Item
      name='email'
      rules={[
        required('Please enter your email!'),
        isEmail('Enter correct E-mail')
      ]}
    >
      <Input prefix={<MailOutlinedIcon />} type='email' placeholder='E-mail' />
    </Form.Item>
    <Form.Item
      name='password'
      hasFeedback
      rules={[
        required('Please enter your password!'),
        min(6, 'Minimum 6 characters')
      ]}
    >
      <Input.Password
        prefix={<LockOutlinedIcon />}
        type='password'
        placeholder='Password'
      />
    </Form.Item>

    <Form.Item
      name='re-password'
      hasFeedback
      rules={[
        required('Please repeat your password!'),
        confirm('password', "Passwords don't match")
      ]}
    >
      <Input.Password
        prefix={<LockOutlinedIcon />}
        type='password'
        placeholder='Repeat password'
      />
    </Form.Item>

    <div className='auth-form__btn-wrap'>
      <Button
        type='primary'
        htmlType='submit'
        className='auth-form__btn'
        loading={isLoading}
      >
        Sign up
      </Button>
    </div>

    <Link to='/login' onClick={clearError}>
      <Button type='link' className='auth-form__btn'>
        I already have an account
      </Button>
    </Link>
  </Form>
)
