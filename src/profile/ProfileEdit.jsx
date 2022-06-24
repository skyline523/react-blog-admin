import * as React from 'react'
import {
  Edit,
  TabbedForm,
  FormTab,
  SaveButton,
  Toolbar,
  useRedirect,
  useNotify,
  required
} from 'react-admin'
import { RichTextInput } from 'ra-input-rich-text'
import { Box } from '@mui/material'

const validateRequired = [required()]

const SaveToobar = props => {
  const redirect = useRedirect()
  const notify = useNotify()

  return (
    <Toolbar {...props}>
      <SaveButton
        mutationOptions={{
          onSuccess: data => {
            notify(
              'Save Success',
              {
                type: 'info',
                undoable: true
              },
              redirect(false)
            )
          }
        }}
      />
    </Toolbar>
  )
}

const ProfileEdit = () => {
  return (
    <Edit title='Profile'>
      <TabbedForm toolbar={<SaveToobar />}>
        <FormTab label='Me'>
          <Box sx={{ width: '80%', margin: '0 auto', minHeight: 400 }}>
            <RichTextInput
              source='me'
              label={false}
              sx={{ display: 'block', height: 400 }}
              validate={validateRequired}
            />
          </Box>
        </FormTab>
        <FormTab label='Website'>
          <Box sx={{ width: '80%', margin: '0 auto', minHeight: 400 }}>
            <RichTextInput
              source='website'
              label={false}
              sx={{ display: 'block', height: 400 }}
              validate={validateRequired}
            />
          </Box>
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}

export default ProfileEdit
