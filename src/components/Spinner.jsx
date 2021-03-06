import React from 'react'
import cn from 'classnames'
import { Spin } from 'antd'

import 'styles/components/Spinner.sass'

export const Spinner = ({ className, fullpage }) => (
  <div className={cn('spinner', className, { 'spinner--full': fullpage })}>
    <Spin size='large' tip='Loading...' />
  </div>
)