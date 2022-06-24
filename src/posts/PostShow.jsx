import * as React from 'react'
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  BooleanField,
  DateField,
  RichTextField,
  WithRecord
} from 'react-admin'
import { Grid } from '@mui/material'

import PostTitle from './PostTitle'
import MyImageField from './MyImageField'

const PostShow = () => {
  return (
    <Show title={<PostTitle />}>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} lg={5}>
          <SimpleShowLayout>
            <TextField label='ID' source='_id' />
            <TextField label='Title' source='title' />
            <TextField label='Excerpt' source='excerpt' />
            <ReferenceField source='tag' reference='tags'>
              <ChipField source='name' />
            </ReferenceField>
            <ReferenceArrayField source='categories' reference='categories'>
              <SingleFieldList>
                <ChipField source='name' />
              </SingleFieldList>
            </ReferenceArrayField>
            <BooleanField
              label='State'
              source='isPublished'
              valueLabelFalse='Not Publish'
              valueLabelTrue='Publish'
            />
            <DateField label='Updated Date' source='updatedAt' />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={12} lg={7}>
          <SimpleShowLayout>
            <WithRecord
              label='cover image'
              render={record => <MyImageField url={record.cover_image} />}
            />
            <RichTextField label='Content' source='content' />
          </SimpleShowLayout>
        </Grid>
      </Grid>

      {/* <TabbedShowLayout>
        <Tab label='Summary'>
          
        </Tab>
        <Tab label='Body'>
          
        </Tab>
        
          自定义评论组件，通过传递的source，使用useRecordContext判断是否有评论再进行条件渲染
       
      </TabbedShowLayout> */}
    </Show>
  )
}

export default PostShow
