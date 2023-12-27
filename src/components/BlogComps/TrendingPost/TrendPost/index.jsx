import React from 'react'
import { Typography, CardMedia } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './index.module.css'
import { Link } from 'react-router-dom';

const TrendingPost = ({ trending_post }) => {
    const { title, about, owner, image, date, slug } = trending_post
    return (
        <Link to={`./blogpost/${slug}`} style={{textDecoration:'none'}}>
            <Card className={styles.card} variant='outlined' sx={{
                minWidth: 275,
                p: { xs: 1, sm: 4, md: 5 },
                flexWrap: { xs: 'wrap', md: 'nowrap' }
            }}
            >
                <CardContent className={styles.cardContentBox} >
                    <Typography variant='h6' component='h6' className={styles.textGradient}>
                        Trending Post
                    </Typography>
                    <Typography variant="h3" component="h3" sx={{
                        fontSize: { xs: '2rem', sm: '3rem', md: '2.5rem', lg: '3rem' }
                    }}>
                        {title}
                    </Typography>
                    <Typography variant='body2' color="text.secondary" gutterBottom>
                        {about}
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: 'rgba(87, 88, 89,0.9)', fontWeight: 600
                    }}>
                        {owner} l  {date}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    alt={`${owner}'s post about ${title}`}
                    image={image}
                    sx={{ borderRadius: '20px' }}
                />
            </Card>
        </Link>
    )
}

export default TrendingPost