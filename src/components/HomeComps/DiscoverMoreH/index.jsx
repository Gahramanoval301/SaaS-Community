import React from 'react'
import styles from './index.module.css'
import { Container, Box, Grid, Stack, Typography, Paper } from '@mui/material'
import { discoverData } from './DiscoverData';

const DiscoverMore = () => {
    return (
        <Container sx={{ py: 5, minHeight: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Stack spacing={3}>
                        <Typography variant="h6" sx={{
                            fontWeight: 600,
                            backgroundImage: 'linear-gradient(to right, #373FFF, #3ACAF8, white, white)',
                            WebkitBackgroundClip: 'text', color: ' transparent', backgroundClip: 'text'
                        }}>Discover More</Typography>
                        <Typography variant="h3" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }} >Analyze your sales and marketing leads</Typography>
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack spacing={5}>
                        {discoverData.map(({ id, title, body, icon }) => {
                            return <Paper elevation={0} key={id}>
                                <Box className={styles.paperContent}>
                                    <Box className={styles.iconDiv}>
                                        {icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                            {title}
                                        </Typography>
                                        <Typography variant="body1">
                                            {body}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        })}
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DiscoverMore