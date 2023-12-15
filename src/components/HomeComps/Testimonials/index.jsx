import React from 'react'
import { Container, Box, Grid, Stack, Typography, Paper } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import styles from './index.module.css'
import { testimonials } from './data-testimonials';

const Testimonials = () => {
    return (
        <Container sx={{ py: 4, my:6}}>
            <Stack alignItems={'center'} spacing={5}>
                <Typography variant="h4" sx={{
                    textAlign: 'center',
                    fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                    width: { sm: '100%', md: '65%' }
                }}>
                    The stunning results our customers have experienced
                </Typography>
                <Grid container spacing={2}>
                    {testimonials.map(({ id, name, comment, job, img }) => {
                        return <Grid item xs={12} sm={6} md={4} key={id}>
                            <Card elevation={0} sx={{
                                border: '2px solid rgba(97, 153, 237, 0.3)',
                                borderRadius: '24px'
                            }}>
                                <CardContent className={styles.cardContent} sx={{ p: { xs: 3, md: 6 } }}>
                                    <Typography variant="body1" sx={{ textAlign: 'center', fontWeight: 600 }}>
                                        {comment}
                                    </Typography>
                                    <Box className={styles.avatar}>
                                        <Avatar alt={`${name} photo`} src={img} />
                                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                            {name}
                                        </Typography>
                                        <Typography variant="body2">{job}</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    })}

                </Grid>
            </Stack>
        </Container >
    )
}

export default Testimonials