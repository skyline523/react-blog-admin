import * as React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
  EditButton,
  TextInput
} from 'react-admin'
import { Box } from '@mui/material'

const TagFilter = [<TextInput source='q' label='Search' alwaysOn />]

const TagList = () => {
  return (
    <Box sx={{ paddingX: '15%' }}>
      <List filters={TagFilter} sort={{ field: 'updatedAt', order: 'DESC' }}>
        <Datagrid rowClick='edit' disableAuthentication>
          <TextField source='_id' />
          <TextField source='name' />
          <DateField source='updatedAt' />
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <EditButton />
            <DeleteButton />
          </Box>
        </Datagrid>
      </List>
    </Box>
  )
}

export default TagList
