import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'

const Banner = ({ greeting }) => {
  return (
    <Box
      sx={{
        padding: 3,
        borderRadius: 4,
        background: 'linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))',
        boxShadow: 'rgb(0 0 0 / 14%) 0rem 0.25rem 1.25rem 0rem, rgb(0 187 212 / 40%) 0rem 0.4375rem 0.625rem -0.3125rem'
      }}
    >
      <Card sx={{ display: 'flex', background: 'transparent', borderRadius: 0, boxShadow: 'none' }}>
        <CardMedia component='img' height='120' src='/imgs/welcome_home.png' alt='Welcome Home' sx={{ width: 120 }} />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Typography variant='h5' component='div' color='#ffffff'>
            {greeting}
          </Typography>
          <Typography variant='h3' component='div' color='#ffffff'>
            WELCOME BACK.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Banner
