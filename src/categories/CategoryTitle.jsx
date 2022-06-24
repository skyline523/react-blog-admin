import * as React from 'react'
import { useRecordContext } from 'react-admin'

const CategoryTitle = () => {
  const record = useRecordContext()
  return <span>Category {record ? `"${record.name}"` : ''}</span>
}

export default CategoryTitle
