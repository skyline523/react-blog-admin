import * as React from 'react'
import { Create, SimpleForm, TextInput, required } from 'react-admin'
import { Box } from '@mui/material'

const validateRequired = [required()]

const TagCreate = () => {
  return (
    <Box sx={{ width: 500 }}>
      <Create>
        <SimpleForm>
          <TextInput source='name' validate={validateRequired} />
          <TextInput source='remark' />
        </SimpleForm>
      </Create>
    </Box>
  )
}

export default TagCreate
