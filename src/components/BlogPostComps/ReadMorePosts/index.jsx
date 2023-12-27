import React from 'react'
import { Typography, Stack, Container, Box, Grid } from '@mui/material'
import { posts } from '../../../mockData/posts'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ReadMorePosts = () => {
    return (
        <Container sx={{ py: { xs: 4, md: 8 } }}>
            <Stack spacing={4}>
                <Link to={'/blog'} style={{
                    textDecoration: 'none', color: 'black'
                }}>
                    <Typography variant="h3" component='h3' sx={{ textAlign: 'center' }}>
                        Read More Posts
                    </Typography>
                </Link>
                <Grid container>
                    {posts.slice(2, 5).map(({ id, title, about, owner, date, slug, image }) => {
                        return <Grid item xs={12} sm={6} md={4} key={id}>
                            <Link to={`/blog/blogpost/${slug}`} style={{ textDecoration: 'none' }}>
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
                    })}
                </Grid>
            </Stack>
        </Container>
    )
}

export default ReadMorePosts