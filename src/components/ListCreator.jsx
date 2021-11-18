import React, { useState } from 'react'
import { Form, Input, Modal } from 'antd'

import { max } from 'utils'
import { PlusIcon } from 'icons'
import 'styles/components/ListCreator.sass'

export const ListCreator = ({ featching, creteList }) => {
  const [createMode, setCreateMode] = useState(false)

  const [formInstance] = Form.useForm()

  const toggleCreateMode = () => setCreateMode(!createMode)

  const submitModal = async () => {
    const { title } = await formInstance.validateFields()

    if (title) await creteList(title)

    toggleCreateMode()
    formInstance.resetFields()
  }

  const onCancelModal = () => {
    toggleCreateMode()
    formInstance.resetFields()
  }

  return (
    <div className='list-creator'>
      <div className='list-creator__trigger' onClick={toggleCreateMode}>
        <PlusIcon className='list-creator__trigger-icon' />
        <span className='list-creator__trigger-text'>Create a list</span>
      </div>
      <div className='copyright-creator__trigger'>
        <a
          href='https://github.com/lulu2kan/DeusVult'
        >
          Created IRT Project
        </a>
      </div>

      <Modal
        className='list-creator__modal'
        title='Create list'
        cancelText='Cancel'
        okText={featching ? 'Adding a list' : 'Add list'}
        okButtonProps={{ loading: featching }}
        visible={createMode}
        onOk={submitModal}
        onCancel={onCancelModal}
      >
        <Form
          layout='vertical'
          className='list-creator__form'
          form={formInstance}
        >
          {createMode && (
            <Form.Item
              name='title'
              label='List name'
              rules={[
                max(30, 'The maximum length of the list is 30 characters')
              ]}
            >
              <Input
                autoFocus
                className='list-creator__input'
                placeholder='Enter the name of the list'
                onPressEnter={submitModal}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  )
}
