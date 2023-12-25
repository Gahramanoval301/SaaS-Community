import React from 'react'
import { Container, Box, Grid, Stack, Typography } from '@mui/material'
import TrendingPost from './TrendPost'
import styles from './TrendPost/index.module.css'
import { posts } from '../../../mockData/posts'

const trending_post = posts.find((post) => { return post.isTrend === true })

const TrendingPostSection = () => {
    return (
        <Box className={styles.bgGradient}>
            <Container className={styles.container} sx={{
                py: { xs: 4, sm: 8 }
            }}>
                <Stack spacing={3} justifyContent={'center'} alignItems={'center'}>
                    <Typography variant="h3" sx={{ textAlign: 'center' }} >
                        Read our latest blogs
                    </Typography>
                    <Typography variant="body1" sx={{
                        width: { xs: '100%', sm: '60%' }, textAlign: 'center'
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor.
                    </Typography>
                    <TrendingPost trending_post={trending_post} key={trending_post.id} />
                </Stack>
            </Container>
        </Box>
    )
}

export default TrendingPostSection