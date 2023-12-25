import React from 'react'
import { Container, Stack, Typography } from '@mui/material'

const AboutUs = () => {
    return (
        <Container sx={{ py: { xs: 4, sm: 8 } }}>
            <Stack spacing={2} justifyContent={'center'} alignItems={'center'}
                sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{
                    background: 'linear-gradient(to right, #141ad6, #4ea9c7 )',
                    color: 'transparent', WebkitBackgroundClip: 'text'
                }}>
                    About Us
                </Typography>
                <Typography variant="h3" sx={{ fontSize: { xs: '2.5rem', sm: '3rem' } }}>
                    We’re a team of data analysts
                </Typography>
                <Typography variant="body1" sx={{ width: { xs: '100%', sm: '60%' } }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </Typography>
            </Stack>

        </Container >
    )
}

export default AboutUs