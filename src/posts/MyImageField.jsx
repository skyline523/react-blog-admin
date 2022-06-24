import * as React from 'react'
import { Card, CardMedia, CardActionArea } from '@mui/material'

const MyImageField = ({ url }) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          height={280}
          image={url}
          sx={{ objectFit: 'cover' }}
        />
      </CardActionArea>
    </Card>
  )
}

export default MyImageField
