import * as React from 'react'
import { List, EditButton, useListContext, RichTextField } from 'react-admin'
import { Box, Tabs, Tab, Typography, Paper } from '@mui/material'

const ProfileList = () => {
  return (
    <List title='Profile' pagination={false} component='div' actions={false}>
      <ProfileBox />
    </List>
  )
}

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const ProfileBox = () => {
  const { data, isLoading } = useListContext()

  const [value, setValue] = React.useState(0)

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  if (isLoading) return null

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <EditButton record={data[0]} sx={{ mt: 3, mb: 1 }} />
      </Box>
      <Paper elevation={2}>
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label='Me' {...a11yProps(0)} />
              <Tab label='Website' {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box sx={{ width: '80%', margin: '0 auto' }}>
              <RichTextField source='me' record={data[0]} />
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={{ width: '80%', margin: '0 auto' }}>
              <RichTextField source='website' record={data[0]} />
            </Box>
          </TabPanel>
        </Box>
      </Paper>
    </Box>
  )
}

export default ProfileList
