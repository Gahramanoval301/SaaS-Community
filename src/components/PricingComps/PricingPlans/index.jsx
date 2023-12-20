import React from 'react'
import { Typography, Box, Stack, Container, Grid, Button } from '@mui/material'
import styles from './index.module.css'

const PricingPlans = () => {
    return (
        <Container>
            <Stack spacing={3} sx={{ border: '1px solid red' }}>
                <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant="h3" sx={{ fontWeight: 600 }}>
                        Pricing plans that suit you
                    </Typography>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                    </Typography>
                    <Box sx={{ backgroundColor: '#E0E4FC', borderRadius: '20px', padding: 1 }}>
                        <Button sx={{ borderRadius: '12px', backgroundColor: 'primary.main', color: 'primary.light', padding: '14px 45px', textTransform: 'none' }}>Monthly</Button>
                        <Button sx={{ padding: '14px 45px', borderRadius: '12px', textTransform: 'none' }}>Yearly</Button>
                    </Box>
                </Stack>
                <Stack>
                    <Grid container>
                        <Grid item>
                            
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </Container>
    )
}

export default PricingPlans