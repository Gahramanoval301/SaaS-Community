import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import styles from './index.module.css'

const RemoteTeams = () => {
    return (
        <Container sx={{ py: 10 }}>
            <Grid container spacing={5} >
                <Grid item md={6} className={styles.bgGradient} >
                    <Box sx={{ width: { xs: '100%', sm: '85%', md: '100%' }, margin: '0 auto' }}>
                        <img src="public/ProductSources/StatisticP.png"
                            alt="Statistic Board 2" width={'100%'} />
                    </Box>
                </Grid>
                <Grid item md={6} >
                    <Stack justifyContent={'center'}
                        spacing={3} sx={{ height: '100%' }}>
                        <Typography variant="h6" className={styles.textGradient}>
                            Remote teams
                        </Typography>
                        <Typography variant="h3" sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
                            Real-time collaboration
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren.
                        </Typography>
                    </Stack>
                </Grid>

            </Grid>
        </Container>
    )
}

export default RemoteTeams