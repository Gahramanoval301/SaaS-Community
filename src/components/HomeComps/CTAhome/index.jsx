import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import ButtonC from '../../Button'
import styles from './index.module.css'
const CTAhome = () => {
    return (
        <Box className={styles.CTAcontainer}>
            <Container>
                <Stack justifyContent={'space-between'} alignItems={'center'} flexDirection={'row'} flexWrap={'wrap'} spacing={4} sx={{gap:'10px'}}>
                    <Stack spacing={3} justifyContent={'flex-start'} alignItems={'flex-start'} sx={{ width: { xs: '100%', md: '48%' } }}>
                        <Typography variant="h3" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>More impressions, more conversions</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</Typography>
                        <Box sx={{ transform: { xs: 'scale(0.8)', sm: 'inherit' } }}>
                            <ButtonC title={'Get Free Trial'} />
                        </Box>
                    </Stack>
                    <Box sx={{ width: { xs: '100%', sm: '85%', md: '50%' }, margin: '0 auto' }}>
                        <img src="/HomeSources/StaticsH.png" alt="Statics" width={'100%'} />
                    </Box>
                </Stack>
            </Container>
        </Box>

    )
}

export default CTAhome