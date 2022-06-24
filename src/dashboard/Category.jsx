import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { stringify } from 'query-string'
import {
  ImageList,
  ImageListItem,
  Paper,
  TextField,
  Tooltip
} from '@mui/material'

const Category = ({ categories }) => {
  const [fliterCategories, setFliterCategories] = useState(categories)

  const handleSearch = e => {
    setFliterCategories(
      categories.filter(item =>
        item.name.toLowerCase().match(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <Paper elevation={3} sx={{ marginTop: 2, paddingX: 2, paddingY: 1 }}>
      <TextField
        id='standard-basic'
        label='Search'
        variant='standard'
        fullWidth
        onChange={e => handleSearch(e)}
      />
      <ImageList
        sx={{ maxHeight: 340 }}
        variant='quilted'
        cols={6}
        rowHeight={48}
      >
        {fliterCategories &&
          fliterCategories.map(item => (
            <Tooltip title={item.name} placement='bottom' key={item.name}>
              <Link
                to={{
                  pathname: '/posts',
                  search: stringify({
                    page: 1,
                    perPage: 10,
                    sort: 'updatedAt',
                    order: 'ASC',
                    filter: stringify({
                      categories: item._id
                    })
                  })
                }}
              >
                <ImageListItem
                  key={item._id}
                  sx={{
                    '& hover': {
                      transform: 'scale(0.5)'
                    }
                  }}
                >
                  <img
                    src={`${item.icon}`}
                    alt={item.name}
                    loading='lazy'
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </ImageListItem>
              </Link>
            </Tooltip>
          ))}
      </ImageList>
    </Paper>
  )
}

export default Category
