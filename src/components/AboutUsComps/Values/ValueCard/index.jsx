import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Container, Box, Stack, Typography, Grid } from '@mui/material'

const ValueCard = ({ title, about, icon }) => {
  return (
    <Card sx={{
      minWidth: 275, bgcolor: 'transparent'
    }} elevation={0}>
      <CardContent sx={{
        display: 'flex', flexDirection: 'column', gap: 1
      }}>
        <Box>
          {icon}
        </Box>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography>
          {about}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ValueCard