import * as React from 'react'
import { Create, SimpleForm, TextInput, required } from 'react-admin'
import { Box } from '@mui/material'

import IconImageField from './IconImageField'

const validateRequired = [required()]

const CategoryCreate = () => {
  const [icon, setIcon] = React.useState('')

  return (
    <Box sx={{ width: 500 }}>
      <Create>
        <SimpleForm>
          {icon && <IconImageField url={icon} />}
          <TextInput source='name' validate={validateRequired} />
          <TextInput
            source='icon'
            onChange={event => setIcon(event.target.value)}
            fullWidth
            rows={2}
            validate={validateRequired}
          />
          <TextInput source='remark' fullWidth validate={validateRequired} />
        </SimpleForm>
      </Create>
    </Box>
  )
}

export default CategoryCreate
