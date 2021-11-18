import React, { memo } from 'react'
import { Modal, Form, Input, Tooltip } from 'antd'

import { max } from 'utils'
import { CloseIcon, EditIcon, StarOutlinedIcon, StarFilledIcon } from 'icons'
import { Checkbox } from 'components'
import 'styles/components/TodoItem.sass'

export const TodoItem = memo(
  ({
    todo: { id, title, completed, important },
    deleteItem,
    editMode,
    toggleEditMode,
    toggleImportant,
    initialValues,
    formInstance,
    checkHandler,
    onCancelModal,
    submitModal
  }) => (
    <li className='todo-item'>
      <Modal
        className='todo-item__editor'
        title='Editing a task'
        okText='Save changes'
        cancelText='Cancel'
        visible={editMode}
        onOk={submitModal}
        onCancel={onCancelModal}
      >
        {editMode && (
          <Form
            layout='vertical'
            className='todo-item__editor-form'
            initialValues={initialValues}
            form={formInstance}
          >
            <Form.Item
              name='title'
              label='Task name'
              rules={[max(512, 'Maximum task length 512 characters')]}
            >
              <Input.TextArea
                autoFocus
                className='todo-item__editor-input'
                placeholder='Enter the name of the task'
                onPressEnter={submitModal}
                autoSize={{ minRows: 1, maxRows: 10 }}
              />
            </Form.Item>
          </Form>
        )}
      </Modal>
      <Checkbox
        className='todo-item__checkbox'
        onChange={checkHandler.bind(this, id, completed)}
        checked={completed}
      >
        <span className='todo-item__text'>{title}</span>
      </Checkbox>
      <div className='todo-item__icons'>
        <Tooltip title='Add to important'>
          <span className='todo-item__icon-wrap'>
            {important ? (
              <StarFilledIcon
                className='todo-item__icon todo-item__icon_blue'
                onClick={toggleImportant.bind(this, id, important)}
              />
            ) : (
              <StarOutlinedIcon
                className='todo-item__icon todo-item__icon_blue'
                onClick={toggleImportant.bind(this, id, important)}
              />
            )}
          </span>
        </Tooltip>
        <Tooltip title='Edit task'>
          <span className='todo-item__icon-wrap'>
            <EditIcon className='todo-item__icon' onClick={toggleEditMode} />
          </span>
        </Tooltip>
        <Tooltip title='Delete task'>
          <span className='todo-item__icon-wrap'>
            <CloseIcon
              className='todo-item__icon'
              onClick={deleteItem.bind(this, id)}
            />
          </span>
        </Tooltip>
      </div>
    </li>
  )
)