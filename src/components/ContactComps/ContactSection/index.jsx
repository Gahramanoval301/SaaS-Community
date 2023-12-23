import React from 'react'
import { Typography, Box, Stack, Container, Grid } from '@mui/material'
import { dataCards } from './contactData';
import styles from './index.module.css'
import ContactForm from '../ContactForm';

const ContactSection = () => {
    return (
        <Container sx={{ py: { xs: 4, md: 8 } }}>
            <Stack spacing={5} >
                <Typography variant="h3" sx={{ textAlign: 'center' }}>
                    Get in touch with us
                </Typography>
                <Grid container spacing={2} sx={{
                    bgcolor: '#F0F2FE',
                    borderRadius: '24px',
                    padding: { xs: 1, sm: 5 }
                }}>
                    <Grid item xs={12} md={6}>
                        <ContactForm />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Stack justifyContent={'center'} alignItems={'center'} spacing={2}
                            sx={{ height: '100%', p: 1 }}>
                            <Stack spacing={2} className={styles.contactContainer}>
                                {
                                    dataCards.map(({ id, contact, description, icon }) => {
                                        return (
                                            <Box className={styles.contactContent} key={id} >
                                                <Box className={styles.iconBox}>
                                                    {icon}
                                                </Box>
                                                <Box>
                                                    <Typography variant='h6' sx={{ fontWeight: 600 }}>
                                                        {contact}
                                                    </Typography>
                                                    <Typography color='text.secondary'>
                                                        {description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        )
                                    })}

                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Container >
    )
}

export default ContactSection