import { Container, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import AboutUs from '../AboutUsSect'

const HeaderA = () => {
    return (
        <Box sx={{
            backgroundImage: 'radial-gradient(#2ccd6f2b, #5ac37a2b, white 55%)',
            backgroundSize: 'contain',
            backgroundPosition: ' -20rem -5rem'
        }}>
            <Container sx={{ py: { xs: 4, md: 8 } }}>
                <Stack spacing={3} justifyContent={'center'} alignItems={'center'} >
                    <Typography variant="h3" sx={{
                        fontSize: { xs: '2.5rem', md: '3rem' }, textAlign: 'center'
                    }}>
                        We are proud of our products
                    </Typography>
                    <Typography variant="body1" sx={{
                        width: { xs: '100%', sm: '60%' }, textAlign: 'center'
                    }} >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </Typography>
                    <Stack flexDirection={'row'} gap={2}
                        justifyContent={'center'}
                        alignItems={'center'}
                        sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                        <Box sx={{
                            '&:hover':
                                { transform: 'rotateY(180deg) scale(1.05)', transition: '500ms', }
                        }}>
                            <img src="/AboutUsSSectources/HeaderSect/person-using-macbook-pro-3861964.png"
                                alt="person-using-macbook-pro" width={'100%'} />
                        </Box>
                        <Box sx={{
                            '&:hover':
                                { transform: 'rotateY(180deg) scale(1.05)', transition: '500ms', }
                        }}>
                            <img src="/AboutUsSSectources/HeaderSect/man-working-from-home-5198252.png"
                                alt="man-working-from-home" width={'100%'} />
                        </Box>
                        <Box sx={{
                            '&:hover':
                                { transform: 'rotateY(180deg) scale(1.05)', transition: '500ms', }
                        }}>
                            <img src="/AboutUsSSectources/HeaderSect/people-working-in-front-of-the-computer-3184357.png"
                                alt="people-working-in-front-of-the-computer" width={'100%'} />
                        </Box>
                    </Stack>
                </Stack>
            </Container>
            <AboutUs />
        </Box>
    )
}

export default HeaderA