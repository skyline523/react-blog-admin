import * as React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectInput,
  SelectArrayInput,
  NullableBooleanInput,
  required
} from 'react-admin'
import { RichTextInput } from 'ra-input-rich-text'
import { Grid } from '@mui/material'

import MyImageField from './MyImageField'

const validateRequired = [required()]

const PostCreate = () => {
  const [imgUrl, setImgUrl] = React.useState('')

  return (
    <Create>
      <SimpleForm>
        <Grid container spacing={2} padding={2}>
          <Grid item xs={12} lg={5}>
            <Grid container direction='column' paddingRight={4}>
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
                  optionValue='_id'
                  xs={{ width: 280 }}
                  validate={validateRequired}
                />
              </ReferenceInput>
              <ReferenceArrayInput source='categories' reference='categories'>
                <SelectArrayInput
                  source='name'
                  optionValue='_id'
                  xs={{ width: 360 }}
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
          <Grid item xs={12} lg={7}>
            {imgUrl && <MyImageField url={imgUrl} />}
            <RichTextInput
              source='content'
              fullWidth
              validate={validateRequired}
            />
          </Grid>
        </Grid>
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
