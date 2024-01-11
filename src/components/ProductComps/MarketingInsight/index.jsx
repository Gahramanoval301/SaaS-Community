import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import styles from './index.module.css'

const MarketingInsights = () => {
    return (
        <Container sx={{ py: { xs: 4, md: 10 } }}>
            <Grid container spacing={2} >
                <Grid item md={6} >
                    <Stack className={styles.bgGradient} justifyContent={'center'}
                        spacing={3} sx={{ height: '100%' }}>
                        <Typography variant="h6" className={styles.textGradient}>
                            Marketing insights
                        </Typography>
                        <Typography variant="h3" sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
                            Data-driven client feedback
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item md={6} sx={{ margin: '0 auto' }}>
                    <Box sx={{ width: { xs: '100%', sm: '85%', md: '100%' }, margin: '0 auto' }}>
                        <img src="/ProductSources/Statistic3.png"
                            alt="Statistic Board" width={'100%'} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default MarketingInsights