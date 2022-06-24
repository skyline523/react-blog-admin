import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'
import { Typography } from '@mui/material'

const PostTimeline = ({ posts }) => {
  return (
    <>
      <Timeline>
        {posts &&
          posts.map(post => (
            <TimelineItem sx={{ '&:before': { flex: 0 } }}>
              <TimelineSeparator>
                <TimelineDot color='primary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ px: 2 }}>
                <Typography>{post.title}</Typography>
                <Typography>
                  {new Date(post.updatedAt).toLocaleString()}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </>
  )
}

export default PostTimeline
