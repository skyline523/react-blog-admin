import * as React from 'react'
import { matchPath, useLocation } from 'react-router-dom'
import {
  List,
  CreateButton,
  ExportButton,
  Datagrid,
  TextField,
  ChipField,
  DateField,
  TopToolbar,
  EditButton,
  DeleteButton
} from 'react-admin'

import WebsiteLogEdit from './WebsiteLogEdit'

const WebsiteLogList = () => {
  const location = useLocation()

  const matchEdit = matchPath('/websiteLogs/:id', location.pathname)

  return (
    <>
      <List
        actions={<WebsiteLogsActions />}
        sort={{ field: 'updatedAt', order: 'DESC' }}
        disableAuthentication
      >
        <Datagrid>
          <DateField source='updatedAt' />
          <ChipField source='type' />
          <TextField source='content' sx={{ display: 'block', width: 500 }} />
          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
      <WebsiteLogEdit open={!!matchEdit} id={matchEdit?.params.id} />
    </>
  )
}

const WebsiteLogsActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  )
}

export default WebsiteLogList
