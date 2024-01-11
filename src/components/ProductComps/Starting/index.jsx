import React from 'react'
import { Container, Box, Grid, Stack, Typography, Button } from '@mui/material'
import Logos from '../../LogosH'
import ButtonC from '../../Button'
import styles from './style.module.css'
import { Link } from 'react-router-dom'

const Starting = () => {
    return (
        <Box sx={{
            backgroundImage: 'linear-gradient(to right, white, rgba(224, 228, 252, 0.2), rgba(235, 237, 250, 0.8), #E0E4FC, rgba(184, 209, 212,0.5))'
        }}>
            <Container sx={{ py: 10 }}>
                <Stack spacing={4} justifyContent={'center'} alignItems={'center'}>
                    <Grid container justifyContent={'space-between'} spacing={2}>
                        <Grid item sm={12} md={6}  >
                            <Stack spacing={3} justifyContent={'center'} sx={{ height: '100%' }}>
                                <Typography variant="h3"
                                    sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}
                                >
                                    Grow your Sales and Services
                                </Typography>
                                <Typography variant="body1">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>
                                <Box className={styles.btn_group}>
                                    <ButtonC title='Get Started' />
                                    <Button className={styles.button}
                                        sx={{ '&:hover': { bgcolor: 'secondary.main' } }}>
                                        <Link to='/contact'>
                                            Contact Us
                                        </Link>
                                    </Button>
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item sm={12} md={6} >
                            <Box sx={{
                                width: { xs: '100%', sm: '80%', md: '100%' },
                                margin: '0 auto'
                            }}>
                                <img src="/ProductSources/Dashboardimg.png"
                                    alt="Dashboard-statistic-schedule" width={'100%'} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Logos />
                </Stack>
            </Container >
        </Box >

    )
}

export default Starting