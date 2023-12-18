import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { data } from './data';

const FeaturesP = () => {
  return (
    <Box sx={{
      backgroundImage: 'linear-gradient(to right, rgba(155, 255, 165, 0.4), rgba(174, 211, 255, 0.7), rgba(212, 227, 250, 1), rgba(202, 207, 250, 0.8),rgba(202, 207, 250, 0.5))'
    }}>
      <Container sx={{ pt: 10, pb: 2 }}>
        <Stack spacing={3} justifyContent={'center'} alignItems={'center'}>
          <Typography variant="h3"
            sx={{
              textAlign: 'center', width: { xs: '100%', md: '80%' },
              fontSize: { xs: '2rem', sm: '3rem' }
            }}>
            Get the best out of your company with our service
          </Typography>
          <Grid container sx={{
            padding: { xs: '1.5rem', md: '3rem' },
            borderRadius: '4rem', bgcolor: 'rgba(255, 255, 255, 0.6)'
          }}>
            {
              data.map(({ id, title, body, icon }) => {
                return <Grid item xs={12} sm={6} md={4} key={id}>
                  <Card elevation={0} sx={{ bgcolor: 'transparent' }}>
                    <CardContent sx={{
                      display: 'flex', flexFlow: 'column wrap', gap: '1rem'
                    }}>
                      {icon}
                      <Typography variant="h5" sx={{
                        fontWeight: 600, minHeight: { sm: '70px', md: '60px', lg: 0 }
                      }}>
                        {title}
                      </Typography>
                      <Typography variant="body1">
                        {body}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              })}
          </Grid>
        </Stack>
      </Container>
    </Box>
  )
}

export default FeaturesP