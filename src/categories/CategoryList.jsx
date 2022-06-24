import * as React from 'react'
import {
  List,
  Datagrid,
  TextField,
  ImageField,
  DateField,
  DeleteButton,
  EditButton,
  TextInput
} from 'react-admin'
import { Box } from '@mui/material'

const CategoryFilter = [<TextInput source='q' label='Search' alwaysOn />]

const CategoryList = () => {
  return (
    <Box sx={{ paddingX: '15%' }}>
      <List
        filters={CategoryFilter}
        sort={{ field: 'updatedAt', order: 'DESC' }}
        disableAuthentication
      >
        <Datagrid rowClick='edit'>
          <TextField source='_id' />
          <ImageField
            source='icon'
            sx={{
              display: 'flex',
              alignItems: 'center',
              '& img': {
                width: 28,
                objectFit: 'contain'
              }
            }}
          />
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

export default CategoryList
