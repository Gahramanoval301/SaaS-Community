import React from 'react'
import { Typography, Box, Container, Button, Stack } from '@mui/material'
import ButtonC from '../Button'

const ViewPricingF = () => {
    return (
        <Box sx={{ background: 'linear-gradient(8deg, #43ff648c,#43ff641a, #43ff640d ,white)', textAlign: 'center', minHeight: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 1 }}>
            <Container>
                <Stack alignItems={'center'} justifyContent={'center'} spacing={2} >
                    <Typography variant="h3" color="initial" sx={{ fontWeight: 600, fontSize: { xs: '2.75rem', sm: '3.75rem' }, width: { xs: '100%', md: '70%' } }}>Are you ready to grow your business with us?</Typography>
                    <Typography variant="body1" color="initial">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</Typography>
                    <ButtonC title={'View Pricing'} />
                </Stack>
            </Container>
        </Box>
    )
}

export default ViewPricingF