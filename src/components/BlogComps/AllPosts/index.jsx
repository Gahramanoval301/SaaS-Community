import React from 'react'
import { Container, Grid, Stack, Typography } from '@mui/material'
import { posts } from '../../../mockData/posts';
import SinglePost from './SinglePost';

const not_trending_posts = posts.filter(post => post.isTrend === false)

const AllPosts = () => {
    return (
        <Container sx={{ py: 5 }}>
            <Stack justifyContent={'center'}
                alignItems={'center'}
                spacing={3}>
                <Typography variant="h4" sx={{
                    textAlign: 'center'
                }}>
                    All Posts
                </Typography>
                <Grid container spacing={2}>
                    {
                        not_trending_posts.map((not_trending_post) => {
                            return <SinglePost key={not_trending_post.id}
                                not_trending_post={not_trending_post} />

                        })
                    }
                </Grid>
            </Stack>
        </Container>
    )
}

export default AllPosts