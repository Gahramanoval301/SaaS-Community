import React from 'react'
import ViewPricingF from './ViewPricing'
import { Typography, Box, Container, Grid, Button, Stack, TextField, Divider } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './index.module.css'
import { footerSections } from './footerSections';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <ViewPricingF />
      <Box sx={{ backgroundColor: '#1e1f24', color: 'white', p: 5 }}>
        <Container>
          <Stack spacing={5}>
            <Grid container spacing={2}>
              {
                footerSections.map(section =>
                (
                  <Grid key={section.id} item xs={12} sm={6} md={4} lg={2.6}>
                    <Typography variant="h6" color="white" sx={{ fontWeight: 600 }}>
                      {section.title}
                    </Typography>
                    {section.sections.map(subSection => (
                      <Link to={subSection.to} style={{ textDecoration: 'none' }} key={subSection.title} >
                        <Typography variant="body1" color="#ffffff80">
                          {subSection.title}
                        </Typography>
                      </Link>
                    ))}
                  </Grid>
                ))}
              <Grid item xs={12} lg={4}>
                <Stack spacing={2}>
                  <Box>
                    <img src="/LogoWhite.png" alt="Logo" />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="white" sx={{ fontWeight: 600, mb: 1 }}>Subscribe to our Newsletter</Typography>
                    <form style={{ display: 'flex' }} className={styles.form}>
                      <TextField className={styles.textfield} id="outlined-basic" variant="outlined" placeholder='Enter your email' sx={{
                        backgroundColor: '#2B2E3C', '& > .MuiInputBase-root': { color: '#fff' },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        }
                      }} />
                      <Button className={styles.button} sx={{
                        backgroundColor: 'white', color: 'primary.main',
                        '&:hover': { backgroundColor: 'secondary.main' }
                      }}>
                        Subscribe
                      </Button>
                    </form>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Box >
              <Divider sx={{ '&::before, &::after': { bgcolor: '#ffffff80' } }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <Typography variant="body1" color="#ffffff80">© Copyright Finsweet 2022</Typography>
                  <Stack flexDirection={'row'} sx={{ color: '#ffffff80', gap: 3 }}>
                    <FacebookRoundedIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <LinkedInIcon />
                  </Stack>
                </Box>
              </Divider>
            </Box>
          </Stack>
        </Container>
      </Box >
    </>
  )
}

export default Footer