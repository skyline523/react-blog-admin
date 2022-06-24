import * as React from 'react'
import { useRecordContext } from 'react-admin'

const TagTitle = () => {
  const record = useRecordContext()
  return <span>Tag {record ? `"${record.name}"` : ''}</span>
}

export default TagTitle
