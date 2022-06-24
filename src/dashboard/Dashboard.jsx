import * as React from 'react'
import { useGetList } from 'react-admin'
import { Box, Grid, Paper } from '@mui/material'
import PostIcon from '@mui/icons-material/Article'
import CategoryIcon from '@mui/icons-material/LocalOffer'
import TagIcon from '@mui/icons-material/Label'
import CommentIcon from '@mui/icons-material/Message'
import * as echarts from 'echarts'

import Banner from './Banner'
import CardWithIcon from './CardWithIcon'
import Category from './Category'
import PostTimeline from './PostTimeline'

const Dashboard = () => {
  const [greeting, setGreeting] = React.useState('')
  const pieChart = React.useRef(null)
  const sort = { field: 'updatedAt', order: 'DESC' }

  const {
    data: posts,
    total: postsTotal,
    isLoading: postLoading
  } = useGetList('posts', {
    sort,
    pagination: { page: 1, perPage: 5 }
  })
  const {
    data: categories,
    total: categoriesTotal,
    isLoading: categoryLoading
  } = useGetList('categories', { sort })
  const {
    data: tags,
    total: tagsTotal,
    isLoading: tagLoading
  } = useGetList('tags', { sort })

  React.useEffect(() => {
    const time = new Date().getHours()

    if (time >= 5 && time < 12) setGreeting('Good Morning')
    else if (time >= 12 && time < 19) setGreeting('Good Afternoon')
    else setGreeting('Good Evening')

    let initPieChart = echarts.init(pieChart.current)

    const pieOption = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Post By Tags',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: false,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: tags.map(tag => ({
            value: tag.relatedPosts.length,
            name: tag.name
          }))
        }
      ]
    }

    initPieChart.setOption(pieOption)
  }, [])

  if (postLoading || categoryLoading || tagLoading) return null

  return (
    <Box sx={{ padding: 5 }}>
      <Banner greeting={greeting} />

      <Grid container spacing={2} marginTop={2}>
        <Grid item xs={3}>
          <CardWithIcon
            title='posts'
            total={postsTotal}
            Icon={PostIcon}
            style={{
              background: 'rgb(87, 202, 34)',
              boxShadow:
                'rgb(68 214 0 / 25%) 0px 1px 4px, rgb(68 214 0 / 35%) 0px 3px 12px 2px'
            }}
            lastItem={posts[0]}
          />
        </Grid>
        <Grid item xs={3}>
          <CardWithIcon
            title='tags'
            total={tagsTotal}
            Icon={TagIcon}
            style={{
              background: 'rgb(85, 105, 255)',
              boxShadow:
                'rgb(85 105 255 / 25%) 0px 1px 4px, rgb(85 105 255 / 35%) 0px 3px 12px 2px'
            }}
            lastItem={tags[0]}
          />
        </Grid>
        <Grid item xs={3}>
          <CardWithIcon
            title='comments'
            total={108}
            Icon={CommentIcon}
            style={{
              background: 'rgb(255, 163, 25)',
              boxShadow:
                'rgb(255 163 25 / 25%) 0px 1px 4px, rgb(255 163 25 / 35%) 0px 3px 12px 2px'
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <CardWithIcon
            title='categories'
            total={categoriesTotal}
            Icon={CategoryIcon}
            style={{
              background: 'rgb(255, 25, 67)',
              boxShadow:
                'rgb(255 25 67 / 25%) 0px 1px 4px, rgb(255 25 67 / 35%) 0px 3px 12px 2px'
            }}
            lastItem={categories[0]}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} marginLeft={0} width='100%'>
        <Grid
          container
          item
          xs={9}
          sx={{
            backgroundColor: '#fff',
            color: 'rgba(0, 0, 0, 0.87)',
            transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            borderRadius: '4px',
            boxShadow:
              '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
          }}
          marginTop={4}
        >
          <Grid item xs={8}>
            <PostTimeline posts={posts} />
          </Grid>
          <Grid item xs={4}>
            <Box ref={pieChart} sx={{ height: 430 }} />
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Category categories={categories} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
