import * as React from 'react'
import {
  EditBase,
  SimpleForm,
  TextInput,
  SelectInput,
  DateInput,
  useRedirect,
  useUpdate,
  useNotify,
  useRecordContext,
  required
} from 'react-admin'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'

const validateRequired = [required()]

const WebsiteLogEdit = ({ open, id }) => {
  const redirect = useRedirect()

  const handleClose = () => {
    redirect('list', 'websiteLogs')
  }

  // if (isLoading) return null

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Edit</DialogTitle>
      {!!id && (
        <EditBase id={id} mutationMode={true}>
          <EditForm id={id} handleClose={handleClose} />
        </EditBase>
      )}
    </Dialog>
  )
}

const EditForm = ({ id, handleClose }) => {
  const redirect = useRedirect()
  const notify = useNotify()
  const record = useRecordContext()
  const [updatedAt, setUpdatedAt] = React.useState(record.updatedAt)
  const [type, setType] = React.useState(record.type)
  const [content, setContent] = React.useState(record.content)
  const [update, { error }] = useUpdate('websiteLogs', {
    id,
    data: {
      updatedAt,
      type,
      content,
      previousData: record
    }
  })

  const options = [
    { label: '后台管理系统', field: '后台管理系统' },
    { label: '前端官网', field: '前端官网' }
  ]

  const handleSubmit = () => {
    update()
    if (!error) {
      notify('Element updated', { type: 'info', undoable: true })
    }
    redirect('list', 'websiteLogs')
  }

  return (
    <>
      <DialogContent sx={{ paddingBottom: 0 }}>
        <SimpleForm toolbar={<MyToolbar />}>
          <DateInput
            source='updatedAt'
            onChange={event => setUpdatedAt(event.target.value)}
            validate={validateRequired}
          />
          <SelectInput
            source='type'
            choices={options}
            optionText='label'
            optionValue='field'
            onChange={event => setType(event.target.value)}
            validate={validateRequired}
          />
          <TextInput
            multiline
            fullWidth
            source='content'
            minRows={2}
            sx={{ display: 'block', width: '100%' }}
            onChange={event => setContent(event.target.value)}
            validate={validateRequired}
          />
        </SimpleForm>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </>
  )
}

const MyToolbar = props => {
  return null
}

export default WebsiteLogEdit
