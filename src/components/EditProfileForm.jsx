import React from 'react'
import { Modal, Form, Input, Avatar, Spin } from 'antd'

import { UserOutlinedIcon } from 'icons'
import { InputFile } from 'components'
import 'styles/components/EditProfileForm.sass'

export const EditProfileForm = ({
  visible,
  cancelModal,
  currentAvatar,
  isUploading,
  uploadAvatar,
  clearAvalar,
  formInstance,
  submitModal,
  initialValues,
  initailAvatar
}) => (
  <Modal
    visible={visible}
    title='Profile settings'
    cancelText='Cancel'
    okText='Save'
    onCancel={cancelModal}
    onOk={submitModal}
  >
    <Form
      form={formInstance}
      className='edit-profile-form'
      layout='vertical'
      name='userForm'
      initialValues={initialValues}
    >
      <Form.Item name='displayName' label='Nickname'>
        <Input placeholder='Enter a new nickname' />
      </Form.Item>

      <Form.Item name='photoURL' label='Your photo'>
        <div className='edit-profile-form__upload'>
          <Spin className='edit-profile-form__spin' spinning={isUploading}>
            <Avatar
              className='edit-profile-form__avatar'
              shape='square'
              size='large'
              icon={<UserOutlinedIcon />}
              src={currentAvatar ? currentAvatar : initailAvatar}
            />
          </Spin>
          <InputFile
            id='userAvatar'
            accept='.png, .jpg, .jpeg'
            setFile={uploadAvatar}
            cleareFile={clearAvalar}
          >
            Upload new photo
          </InputFile>
        </div>
      </Form.Item>
    </Form>
  </Modal>
)
