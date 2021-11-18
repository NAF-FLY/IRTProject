import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { Typography, notification } from 'antd'

import { LoginForm, RegisterForm } from 'containers'
import { ShadowBlock } from 'components'
import 'styles/pages/Auth.sass'

export const Auth = () => {
  const history = useHistory()

  useEffect(() => {
    notification.info({
      message: 'Testing account',
      description: 'Email: test@mail.com. Password: 123456 ',
      duration: 0,
      placement: 'bottomRight',
      key: 'TestInfo'
    })
  }, [])

  useEffect(() => {
    history.listen(() => notification.close('TestInfo'))
  }, [history])

  return (
    <section className='auth-page'>
      <ShadowBlock className='auth-page__inner'>
        <Typography.Title level={2} className='auth-page__title'>
          IRT Project
        </Typography.Title>

        <p className='auth-page__subtitle'>Smart time-managment</p>

        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </ShadowBlock>
    </section>
  )
}
