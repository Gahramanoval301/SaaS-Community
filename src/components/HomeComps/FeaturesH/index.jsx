import React from 'react'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import HeadsetMicRoundedIcon from '@mui/icons-material/HeadsetMicRounded';
import styles from './index.module.css'

const FeatuesH = () => {
  return (
    <Container sx={{ border: '1px solid red', py: 3 }}>
      <Stack spacing={2} alignItems={'center'} justifyContent={'center'}>
        <Typography variant="body1" className={styles.textGradient}>High-quality</Typography>
        <Typography variant="h3" color="initial" sx={{ fontWeight: 600, width:{xs:'100%',sm:'80%', md:'65%'}, fontSize: { xs: '2.3rem', md: '3rem' },textAlign:'center'}}>We have the Best Solution for your Business</Typography>
        <Grid container spacing={2} sx={{ p:{xs:0,sm:3}, backgroundColor:'#E0E4FC', borderRadius:'24px'}}>
          <Grid item sm={6} md={4}>
            <Card sx={{  backgroundColor:'transparent' }} elevation={0}>
              <CardContent>
                <VerifiedUserIcon sx={{ fontSize: '45px', color: 'secondary.main' }} />
                <Typography gutterBottom variant='h5' fontWeight={600} sx={{minHeight:{sm:'100px',md:'65px'}}}>
                  High security to protect from piracy
                </Typography>
                <Typography variant="body1" color="initial">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card sx={{  backgroundColor:'transparent' }} elevation={0}>
              <CardContent>
                <ThumbUpAltRoundedIcon sx={{ fontSize: '45px', color: 'secondary.main' }} />
                <Typography gutterBottom variant='h5' fontWeight={600} sx={{minHeight:{sm:'100px',md:'65px'}}}>
                  Premium quality performance
                </Typography>
                <Typography variant="body1" color="initial">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={4}>
            <Card sx={{ backgroundColor:'transparent' }} elevation={0}>
              <CardContent>
                <HeadsetMicRoundedIcon sx={{ fontSize: '45px', color: 'secondary.main' }} />
                <Typography gutterBottom variant='h5' fontWeight={600} sx={{minHeight:{sm:'100px',md:'65px'}}}>
                  Full time customer support - 24/7
                </Typography>
                <Typography variant="body1" color="initial">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}

export default FeatuesH