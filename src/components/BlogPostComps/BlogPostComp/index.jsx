import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../../../mockData/posts'
import { Typography, Stack, Container, Box } from '@mui/material'

const BlogPostComp = () => {
    const { slug } = useParams()
    const post_slug = posts.find(post => post.slug === slug)
    const {
        headline,
        subHeadline,
        HeadlineInfo1,
        HeadlineInfo2,
        subHeadlineInfo1,
        subHeadlineInfo2,
        quote
    } = post_slug.blogPost

    return (
        <Box sx={{
            backgroundImage: 'radial-gradient(#aed2ff5b,#c9d4ef60,#cacffa3c,#9bffa520,rgba(255, 255, 255, 0.428),rgba(255, 255, 255, 0.421),rgba(255, 255, 255, 0.703))',
            backgroundPosition: '-20rem 0'
        }}>
            <Container sx={{ py: { xs: 4, md: 8 } }}>
                <Stack spacing={4} justifyContent={'center'} alignItems={'center'}>
                    <Stack spacing={1} justifyContent={'center'} alignItems={'center'}
                        sx={{ textAlign: 'center', width: { xs: '100%', md: '70%' } }}>
                        <Typography variant="h3" sx={{
                            fontSize: { xs: '2rem', sm: '3rem' }
                        }}>
                            {post_slug.title}
                        </Typography>
                        <Typography variant="body2" sx={{
                            color: 'rgba(87, 88, 89,0.9)', fontWeight: 600
                        }} >
                            {post_slug.owner} l  {post_slug.date}
                        </Typography>
                    </Stack>
                    <Box sx={{ width: '100%' }}>
                        <img src={post_slug.image} alt={`${post_slug.owner}'s post about ${post_slug.title}`}
                            width={'100%'}
                            style={{
                                borderRadius: '24px', objectFit: 'cover', minHeight: '250px'
                            }} />
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '90%', md: '70%' } }}>
                        <Stack spacing={2} sx={{ mb: 3 }}>
                            <Typography variant="h3" component='h3'
                                sx={{ fontSize: { xs: '2.125rem', sm: '3rem' } }}>
                                {headline}
                            </Typography>
                            <Typography variant="body1">
                                {HeadlineInfo1}
                            </Typography>
                            <Typography variant="body1">
                                {HeadlineInfo2}
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant="h4" component='h4'>
                                {subHeadline}
                            </Typography>
                            <Typography variant="body1">
                                {subHeadlineInfo1}
                            </Typography>
                            <Typography variant="body1">
                                {quote}
                            </Typography>
                            <Typography variant="body1">
                                {subHeadlineInfo2}
                            </Typography>
                        </Stack>
                    </Box>

                </Stack>
            </Container>
        </Box >
    )
}

export default BlogPostComp