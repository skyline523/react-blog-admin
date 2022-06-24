import * as React from 'react'
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  BooleanField,
  DateField,
  EditButton,
  DeleteButton,
  TextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin'

const postFilters = [
  <TextInput source='q' label='Search' alwaysOn />,
  <ReferenceInput label='Category' source='categories' reference='categories'>
    <SelectInput optionText='name' optionValue='_id' />
  </ReferenceInput>,
  <ReferenceInput label='Tag' source='tag' reference='tags'>
    <SelectInput optionText='name' optionValue='_id' />
  </ReferenceInput>
]

const PostList = () => {
  return (
    <List
      filters={postFilters}
      sort={{ field: 'updatedAt', order: 'DESC' }}
      disableAuthentication
    >
      <Datagrid rowClick='show'>
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
        <DeleteButton />
      </Datagrid>
    </List>
  )
}

export default PostList
