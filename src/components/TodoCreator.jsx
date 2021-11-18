import React, { useRef } from 'react'
import cn from 'classnames'
import { Form, Input, Button } from 'antd'

import { max } from 'utils'
import { PlusIcon } from 'icons'
import 'styles/components/TodoCreator.sass'

export const TodoCreator = ({ featching, createMode, onSubmit, toggleCreateMode }) => {
  const todoCreatorRef = useRef()

  const formSize = window.innerWidth >= 425 ? 'large': 'default'

  return (
    <div
      className={cn('todo-creator', { 'todo-creator--created': createMode })}
      ref={todoCreatorRef}
    >
      {!createMode && (
        <div className='todo-creator__trigger' onClick={toggleCreateMode}>
          <PlusIcon />
          <span className='todo-creator__trigger-text'>New task</span>
        </div>
      )}

      {createMode && (
        <Form
          name='basic'
          size={formSize}
          className='todo-creator__form'
          onFinish={onSubmit}
        >
          <Form.Item
            name='title'
            className='todo-creator__input'
            rules={[max(512, 'Maximum task length 512 characters')]}
          >
            <Input autoFocus placeholder='Task text' />
          </Form.Item>

          <div className='todo-creator__buttons'>
            <Button
              className='todo-creator__button'
              type='primary'
              loading={featching}
              htmlType='submit'
            >
              {featching ? 'Adding a task' : 'Add task'}
            </Button>
            <Button
              className='todo-creator__button'
              onClick={toggleCreateMode}
              htmlType='reset'
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </div>
  )
}
