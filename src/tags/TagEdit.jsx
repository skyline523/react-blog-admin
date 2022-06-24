import * as React from 'react'
import {
  Edit,
  Datagrid,
  Labeled,
  ReferenceManyField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  BooleanField,
  DateField,
  EditButton,
  SimpleForm,
  TextInput,
  TextField,
  required
} from 'react-admin'
import { Box } from '@mui/material'

import TagTitle from './TagTitle'

const validateRequired = [required()]

const TagEdit = () => {
  return (
    <Box sx={{ paddingX: '15%' }}>
      <Edit title={<TagTitle />}>
        <SimpleForm>
          <TextInput source='_id' disabled />
          <TextInput source='name' validate={validateRequired} />
          <Labeled label='Relate Posts' fullWidth>
            <ReferenceManyField reference='posts' target='tag'>
              <Datagrid>
                <TextField source='title' />
                <ReferenceField source='tag' reference='tags'>
                  <ChipField source='name' />
                </ReferenceField>
                <ReferenceArrayField source='categories' reference='categories'>
                  <SingleFieldList sx={{ minWidth: 280 }}>
                    <ChipField source='name' />
                  </SingleFieldList>
                </ReferenceArrayField>
                <BooleanField source='isPublished' sx={{ width: 100 }} />
                <DateField
                  source='updatedAt'
                  sx={{
                    display: 'inline-block',
                    width: 120
                  }}
                />
                <EditButton />
              </Datagrid>
            </ReferenceManyField>
          </Labeled>
        </SimpleForm>
      </Edit>
    </Box>
  )
}

export default TagEdit
