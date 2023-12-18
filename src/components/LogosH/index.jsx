import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import { logos } from './logos'

const Logos = () => {
    return (
        <Container sx={{py:5}}>
            <Grid container spacing={1}>
                {logos.map(({id, img}) => {
                    return <Grid item key={id} xs={12} sm={6} lg={2.4}>
                        <Box>
                            <img src={img} alt={`${id} Logoipsum`} />
                        </Box>
                    </Grid>
                })}

            </Grid>
        </Container>
    )
}

export default Logos