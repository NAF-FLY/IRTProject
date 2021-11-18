import React, { memo } from 'react'
import { Dropdown, Menu, Modal, Form, Input, Result } from 'antd'

import { randomColor, max } from 'utils'
import { MoreIcon, EditOutlinedIcon, DeleteOutlinedIcon } from 'icons'
import { TodoCreator, TodoItem } from 'containers'
import 'styles/components/TodoList.sass'

export const TodoList = memo(
  ({
    canCreate,
    todos,
    list,
    editMode,
    formInstance,
    featching,
    submitModal,
    cancelModal,
    deleteList,
    toggleEditMode,
    emptyText
  }) => {
    const menu = (
      <Menu>
        <Menu.Item onClick={toggleEditMode}>
          <EditOutlinedIcon />
          <span>Edit list</span>
        </Menu.Item>
        <Menu.Item onClick={deleteList}>
          <DeleteOutlinedIcon />
          <span>Delete list</span>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className='todo-list'>
        {list && (
          <>
            <div className='todo-list__header'>
              <Modal
                className='todo-list__editor'
                title='Editing a list'
                okText='Save changes'
                cancelText='Cancel'
                visible={editMode}
                onOk={submitModal}
                onCancel={cancelModal}
                okButtonProps={{ loading: featching }}
              >
                {editMode && (
                  <Form
                    layout='vertical'
                    className='todo-list__editor-form'
                    initialValues={{ title: list.title }}
                    form={formInstance}
                  >
                    <Form.Item
                      name='title'
                      label='List name'
                      rules={[max(512, 'Maximum length 512 characters')]}
                    >
                      <Input
                        autoFocus
                        className='todo-list__editor-input'
                        placeholder='Enter the name of the list'
                      />
                    </Form.Item>
                  </Form>
                )}
              </Modal>

              <h2 className='todo-list__title' style={{ color: randomColor() }}>
                {list.title}
              </h2>
              {canCreate && (
                <Dropdown overlay={menu}>
                  <span className='todo-list__dropdown-icon'>
                    <MoreIcon />
                  </span>
                </Dropdown>
              )}
            </div>
            <ul className='todo-list__items'>
              {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
              ))}
            </ul>
            {!canCreate && !todos.length && (
              <Result
                status='404'
                title='The list is empty'
                subTitle={emptyText}
              />
            )}
            {canCreate && (
              <div className='todo-list__todo-creator'>
                <TodoCreator listId={list.id} />
              </div>
            )}
          </>
        )}
      </div>
    )
  }
)
