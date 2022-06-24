import * as React from 'react'
import { useRecordContext } from 'react-admin'

const PostTitle = () => {
  const record = useRecordContext()
  return <span>Post {record ? `"${record.title}"` : ''}</span>
}

export default PostTitle
