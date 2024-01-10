import React from 'react'
import PageContainer from '../../components/PageContainer'
import { Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <PageContainer>
            <Container sx={{
                py: { xs: 4, sm: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <Typography variant="h5" color="primary" component='h2'>
                    Oops...
                </Typography>
                <Link style={{
                    color: 'black',
                    fontSize: '20px',
                    border: '1px solid #6B7CFF',
                    padding: '10px 20px',
                    borderRadius: '15px',
                }} to='/' >Go back to the home</Link>
            </Container>
        </PageContainer>
    )
}

export default NotFound