import React from 'react'
import { Container, Stack, Typography, Grid } from '@mui/material'
import { data } from './ValueCard/data'
import ValueCard from './ValueCard'

const Values = () => {
    return (
        <Container sx={{ py: { xs: 3, sm: 8 } }}>
            <Stack spacing={3} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h3" sx={{
                    textAlign: 'center',
                    fontSize: { xs: '2.5rem', sm: '3rem' }
                }}>
                    Our corporate values
                </Typography>
                <Typography variant="body1" sx={{
                    textAlign: 'center'
                }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy.
                </Typography>
                <Grid container spacing={1} sx={{
                    backgroundColor: '#F9F0FB', borderRadius: '24px',
                    p: { xs: 0, sm: 3 }
                }} >
                    {
                        data.map(({ id, title, about, icon }) => {
                            return <Grid item xs={12} sm={6} md={4} key={id}>
                                <ValueCard title={title} about={about} icon={icon} />
                            </Grid>
                        })
                    }
                </Grid>
            </Stack>
        </Container>

    )
}

export default Values