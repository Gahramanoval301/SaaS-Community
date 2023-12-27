import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';


const SinglePost = ({ not_trending_post }) => {
    const { title, about, owner, image, date, slug } = not_trending_post

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Link to={`./blogpost/${slug}`} style={{ textDecoration: 'none' }}>
                <Card elevation={0} sx={{
                    maxWidth: 345, borderRadius: '20px',
                    '&:hover': { bgcolor: 'rgba(128,128,128,0.1)' }
                }}>
                    <CardMedia
                        component="img"
                        alt={`${owner}'s post about ${title}`}
                        height="200"
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6"
                            sx={{
                                minHeight: { xs: '90px', sm: '130px', lg: '100px' }
                            }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"
                            sx={{ mb: 2 }}>
                            {about}
                        </Typography>
                        <Typography variant="body2"
                            sx={{ color: 'rgba(87, 88, 89,0.9)', fontWeight: 600 }}>
                            {owner} l  {date}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Grid>
    )
}

export default SinglePost