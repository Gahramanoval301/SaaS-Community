import React from 'react'
import { Container, Box, Stack, Typography, Grid } from '@mui/material'
import WorkerCard from './Workers/workerCards'
import { workersData } from './Workers/workerData'

const Team = () => {
    return (
        <Container sx={{ py: { xs: 3, sm: 8 } }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={5}>
                    <Stack spacing={2} sx={{
                        justifyContent: 'center',
                        alignItems: { xs: 'center', md: 'start' }
                    }}>
                        <Typography variant="h4" sx={{
                            fontSize: { xs: '1.8rem', md: '2.125rem' },
                            textAlign: { xs: 'center', md: 'start' }
                        }}>
                            Our talented Team
                        </Typography>
                        <Typography variant="body1"
                            sx={{ textAlign: { xs: 'center', md: 'start' } }}
                        >
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Stack flexDirection={'row'}
                        flexWrap={'wrap'} gap={2}
                        justifyContent={'center'}
                        alignItems={'center'}>
                        {
                            workersData.map(({ id, fullName, job, image }) => {
                                return <WorkerCard
                                    key={id}
                                    fullName={fullName}
                                    job={job}
                                    image={image} />
                            })
                        }
                    </Stack>
                </Grid>
            </Grid>
        </Container >
    )
}

export default Team