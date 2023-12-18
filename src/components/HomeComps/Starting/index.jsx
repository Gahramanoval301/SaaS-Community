import React from 'react'
import { Typography, Box, Stack, TextField, Container } from '@mui/material'
import ButtonC from '../../Button'
import styles from './index.module.css'

const Starting = () => {
    return (
        <Container>
            <Stack sx={{
                py: 10,
                backgroundImage: 'radial-gradient(#95c2c7, rgba(149, 194, 199, 0.5), rgba(235, 237, 250, 0.8), white, white)'
            }}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={4}
            >
                <Box sx={{ width: { sx: '100%', sm: '90%', md: '70%' }, textAlign: 'center', }}>
                    <Typography variant="h3" color="initial"
                        sx={{
                            fontWeight: 600, mb: 3, fontSize: { xs: '2.3rem', md: '3rem' }
                        }}>
                        The Best Software to Grow your Sales and Services
                    </Typography>
                    <Typography variant="body1" color="initial">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                    </Typography>
                </Box>
                <form>
                    <Box className={styles.formContainer} sx={{
                        backgroundColor: 'white',
                        padding: '5px',
                        borderRadius: '20px'
                    }} >
                        <TextField id="email" placeholder='Enter your email' className={styles.textfield} sx={{
                            borderRadius: '20px',
                            backgroundColor: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            }
                        }} />
                        <Box className={styles.btnContainer} display={'inline-block'}>
                            <ButtonC title={'Get Free Trial'}></ButtonC>
                        </Box>
                    </Box>
                    <Box className={styles.responsiveBtn} sx={{ textAlign: 'center', mt: 2, display: 'none' }}>
                        <ButtonC title={'Get Free Trial'}></ButtonC>
                    </Box>
                </form>
                <Box sx={{ textAlign: 'center', width: { xs: '100%', sm: '85%' } }}>
                    <img src="/HomeSources/Dashboardimg.png"
                        alt="Dasboard Image" style={{ width: '100%' }} />
                </Box>
            </Stack >
        </Container>
    )
}

export default Starting