import * as React from 'react'
import {
  Create,
  SimpleForm,
  DateInput,
  TextInput,
  SelectInput,
  required
} from 'react-admin'
import { Box } from '@mui/material'

const options = [
  { label: '后台管理系统', field: '后台管理系统' },
  { label: '前端官网', field: '前端官网' }
]

const validateRequired = [required()]

const WebsiteLogCreate = () => {
  return (
    <Box sx={{ maxWidth: 500 }}>
      <Create>
        <SimpleForm>
          <DateInput source='updatedAt' validate={validateRequired} />
          <SelectInput
            source='type'
            choices={options}
            optionText='label'
            optionValue='field'
            validate={validateRequired}
          />
          <TextInput
            multiline
            fullWidth
            source='content'
            validate={validateRequired}
          />
        </SimpleForm>
      </Create>
    </Box>
  )
}

export default WebsiteLogCreate
