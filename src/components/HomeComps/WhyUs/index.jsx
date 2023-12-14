import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import styles from './index.module.css'

let array3length = ['', '', '']

const WhyUsH = () => {
    return (
        <Container sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
            <Grid container spacing={4} sx={{ py: 5 }}>
                <Grid item md={6}>
                    <Stack spacing={2}>
                        <Typography variant="h6" sx={{
                           fontWeight:600,
                           backgroundImage: 'linear-gradient(10deg, #373FFF, #3ACAF8, #3ACAF8)',
                           WebkitBackgroundClip: 'text', color: ' transparent', backgroundClip: 'text'
                        }}>Why should you work with us?</Typography>
                        <Typography variant="h3" color="initial" sx={{ fontSize: { xs: '2rem', sm: '2.7rem' } }}>To upscale your business to the next level</Typography>
                        <Typography variant="body2" color="initial">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua
                            invidunt ut labore.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <Stack spacing={3}>
                        {array3length.map(() => {
                            return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 2 }}>
                                <Box className={styles.iconDiv} >
                                    <EastIcon sx={{ fontSize: { xs: "16px", sm: 'normal' } }} />
                                </Box>
                                <Typography variant="body1" color="initial" sx={{ fontWeight: 600 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Typography>
                            </Box>

                        })}

                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default WhyUsH