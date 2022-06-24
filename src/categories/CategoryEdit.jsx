import * as React from 'react'
import { Edit, SimpleForm, TextInput, WithRecord, required } from 'react-admin'
import { Box } from '@mui/material'

import CategoryTitle from './CategoryTitle'
import IconImageField from './IconImageField'

const validateRequired = [required()]

const CategoryEdit = () => {
  const [icon, setIcon] = React.useState('')

  return (
    <Box sx={{ width: 500 }}>
      <Edit title={<CategoryTitle />}>
        <SimpleForm>
          <WithRecord
            render={record => <IconImageField url={icon || record.icon} />}
          />
          <TextInput source='_id' disabled />
          <TextInput source='name' validate={validateRequired} />
          <TextInput
            source='icon'
            onChange={event => setIcon(event.target.value)}
            fullWidth
            rows={2}
            validate={validateRequired}
          />
          <TextInput
            multiline
            source='remark'
            fullWidth
            validate={validateRequired}
          />
        </SimpleForm>
      </Edit>
    </Box>
  )
}

export default CategoryEdit
