import React from 'react'
import { Card, CardMedia, CardActionArea } from '@mui/material'

const IconImageField = ({ url }) => {
  return (
    <Card sx={{ marginY: 3 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height={64}
          image={url}
          sx={{ width: 64, objectFit: 'contain' }}
        />
      </CardActionArea>
    </Card>
  )
}

export default IconImageField
