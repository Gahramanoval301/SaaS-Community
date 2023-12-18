import React from 'react'
import { Typography, Box, Container, Grid, Card, CardContent, Button, Stack, TextField, Divider } from '@mui/material'
import { featuresData } from './featuresData'
import styles from './index.module.css'

const Features = () => {
    return (
        <Container>
            <Typography variant="h3" sx={{ textAlign: 'center', py: 5 }}>Features</Typography>
            <Box sx={{
                backgroundColor: 'rgba(215, 152, 225, 0.3)',
                borderRadius: '24px',
                padding: { xs: 1, sm: 3, md: 5 }
            }}>
                <Grid container spacing={2}>
                    {featuresData.map(({ id, title, body, icon }) => {
                        return (
                            <>
                                <Grid item xs={12} sm={5.8} md={3.8} key={id}>
                                    <Card sx={{ backgroundColor: 'transparent' }} elevation={0}>
                                        <CardContent>
                                            <Box sx={{ mb: 2 }}>
                                                {icon}
                                            </Box>
                                            <Typography gutterBottom variant='h4' fontWeight={600}
                                                sx={{
                                                    minHeight: { sm: '105px', md: '120px', lg: '65px' },
                                                    fontSize: { xs: '1.7rem', md: '2rem' }
                                                }}>
                                                {title}
                                            </Typography>
                                            <Divider sx={{ my: 4, display: { sm: 'block', md: 'none' } }} />
                                            <Typography variant="body1" color="initial">
                                                {body}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                {
                                    id != featuresData.length - 1 ?
                                        <Divider orientation="vertical"
                                            variant="middle"
                                            flexItem
                                            sx={{ margin: '0 8px', display: { sm: 'none', md: 'block' } }} />
                                        : null
                                }
                            </>
                        )
                    })}
                </Grid>
            </Box>
        </Container>


    )
}

export default Features