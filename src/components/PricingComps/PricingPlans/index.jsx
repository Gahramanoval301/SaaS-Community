import React from 'react'
import { Typography, Box, Stack, Container, Grid, Button } from '@mui/material'
import { useState } from 'react'
import styles from './index.module.css'
import { data } from './dataCards'
import PricingCard from './PricingCard'

const PricingPlans = () => {
    const [isToggled, setIsToggled] = useState(JSON.parse(localStorage.getItem('isToggled')))
    localStorage.setItem('isToggled', JSON.stringify(isToggled))
    console.log(JSON.parse(localStorage.getItem('isToggled')))

    const style = {
        backgroundColor: isToggled ? 'black' : '',
        color: isToggled ? 'white' : '',
    };

    const style2 = {
        backgroundColor: (!isToggled) ? 'black' : '',
        color: (!isToggled) ? 'white' : '',
    };

    function handleClick() {
        setIsToggled(!JSON.parse(localStorage.getItem('isToggled')))
        console.log(isToggled);
    }
    return (
        <Box className={styles.container}>
            <Container sx={{ py: { xs: 4, md: 8 } }}>
                <Stack spacing={5} >
                    <Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
                        <Box sx={{ width: { xs: '100%', sm: '70%', md: '40%' }, textAlign: 'center' }}>
                            <Typography variant="h3" sx={{
                                fontWeight: 600,
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, mb: 1
                            }}>
                                Pricing plans that suit you
                            </Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor.
                            </Typography>
                        </Box>
                        <Box onClick={handleClick} className={styles.btn_group} >
                            <Button className={styles.btn} style={style}>Monthly</Button>
                            <Button className={styles.btn} style={style2}>Yearly</Button>
                        </Box>
                    </Stack>
                    <Stack>
                        <Grid container spacing={2}>
                            {
                                data.map(data => <PricingCard data={data} key={data.id} />
                                )}
                        </Grid>
                    </Stack>
                </Stack>
            </Container >
        </Box>
    )
}

export default PricingPlans