import React from 'react'
import { Card, Box, Typography } from '@mui/material'

const CardWithIcon = ({ title, total, Icon, style }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        padding: 3,
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: 108
      }}
    >
      <Typography variant='h6' sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>
      <Box
        sx={{
          paddingTop: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            boxSizing: 'border-box',
            padding: 3,
            width: 72,
            height: 72,
            borderRadius: '10px',
            background: style.background,
            boxShadow: style.boxShadow
          }}
        >
          <Icon sx={{ fill: '#ffffff' }} />
        </Box>
        <Typography variant='h4' fontWeight={600} paddingLeft={2}>
          {total}
        </Typography>
      </Box>
    </Card>
  )
}

export default CardWithIcon
