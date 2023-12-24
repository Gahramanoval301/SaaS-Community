import React from 'react'
import { Container, Box, Stack, Typography, Grid } from '@mui/material'

const GoalsAndVisions = () => {
    return (
        <Box sx={{
            bgcolor: 'secondary.light', py: { xs: 4, sm: 8 }
        }}>
            <Container >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2} >
                            <Typography variant="h6" sx={{
                                background: 'linear-gradient(to right, #141ad6, white, white)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                            }}>
                                Our Goals
                            </Typography>
                            <Typography variant="h3" sx={{
                                fontSize: { xs: '2rem', sm: '2.7rem' },
                                minHeight: { md: '140px', lg: 'auto' }
                            }}>
                                To upscale your business
                                to the next level
                            </Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Stack spacing={2}>
                            <Typography variant="h6" sx={{
                                background: 'linear-gradient(to right, #141ad6, #4ea9c7 )',
                                color: 'transparent', WebkitBackgroundClip: 'text'
                            }}>
                                Our Vision
                            </Typography>
                            <Typography variant="h3" sx={{
                                fontSize: { xs: '2rem', sm: '2.7rem' },
                                minHeight: { md: '140px', lg: 'auto' }
                            }}>
                                To provide solutions for growing companies
                            </Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat,
                                sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum.                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default GoalsAndVisions