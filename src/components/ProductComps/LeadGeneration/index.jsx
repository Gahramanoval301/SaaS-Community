import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import styles from './index.module.css'

const LeadGeneration = () => {
    return (
        <Box className={styles.bgGradient}>
            <Container sx={{ py: 10 }}  >
                <Grid container spacing={5} >
                    <Grid item md={6} >
                        <Stack justifyContent={'center'}
                            spacing={3} sx={{ height: '100%' }}>
                            <Typography variant="h6" className={styles.textGradient}>
                                Lead Generation
                            </Typography>
                            <Typography variant="h3" sx={{ fontSize: { xs: '2rem', sm: '3rem' } }}>
                                More leads that convert
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
                        <Box>
                            <img src="public/ProductSources/StaticsH.png"
                                alt="Statistic Board" width={'100%'} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default LeadGeneration