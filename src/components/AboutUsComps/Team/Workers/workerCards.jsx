import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Container, Box, Stack, Typography, Grid } from '@mui/material'

const WorkerCard = ({fullName, job, image}) => {
  return (
    <Card elevation={0} sx={{ width:'200px', bgcolor:'#E0E4FC', mt:2}}  >
    <CardMedia
      component="img"
      alt={`${fullName}'s photo`}
      height="140"
      image={image}
    />
    <CardContent>
      <Typography  variant="h6" component={'h3'} >
        {fullName}
      </Typography>
      <Typography variant="body2">
        {job}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default WorkerCard