import * as React from 'react'
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectInput,
  SelectArrayInput,
  NullableBooleanInput,
  WithRecord,
  required
} from 'react-admin'
import { RichTextInput } from 'ra-input-rich-text'
import { Grid } from '@mui/material'

import PostTitle from './PostTitle'
import MyImageField from './MyImageField'

const validateRequired = [required()]

const PostEdit = () => {
  const [imgUrl, setImgUrl] = React.useState('')

  return (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <Grid container spacing={2} padding={2}>
          <Grid item sx={12} lg={5}>
            <Grid container direction='column' paddingRight={4}>
              <TextInput source='_id' disabled sx={{ width: 300 }} />
              <TextInput source='title' validate={validateRequired} />
              <TextInput
                multiline
                source='excerpt'
                validate={validateRequired}
              />
              <TextInput
                source='cover_image'
                multiline
                onChange={event => setImgUrl(event.target.value)}
                validate={validateRequired}
              />
              <ReferenceInput source='tag' reference='tags'>
                <SelectInput
                  source='name'
                  sx={{ width: 280 }}
                  validate={validateRequired}
                />
              </ReferenceInput>
              <ReferenceArrayInput source='categories' reference='categories'>
                <SelectArrayInput
                  source='name'
                  optionValue='_id'
                  sx={{ width: 360 }}
                  validate={validateRequired}
                />
              </ReferenceArrayInput>
              <NullableBooleanInput
                source='isPublished'
                falseLabel='Not Publish'
                trueLabel='Publish'
                validate={validateRequired}
              />
            </Grid>
          </Grid>
          <Grid item sx={12} lg={7}>
            <WithRecord
              label='cover image'
              render={record => (
                <MyImageField url={imgUrl || record.cover_image} />
              )}
            />
            <RichTextInput source='content' validate={validateRequired} />
          </Grid>
        </Grid>
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
