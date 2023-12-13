import React from 'react'
import ViewPricingF from './ViewPricing'
import { Typography, Box, Container, Grid, Button, Stack, TextField } from '@mui/material'
import styles from './index.module.css'
const Footer = () => {
  return (
    <>
      <ViewPricingF />
      <Box sx={{ backgroundColor: '#1e1f24', color: 'white', p: 5 }}>
        <Container>
          <Stack>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4} lg={2.6}>
                <Typography variant="h6" color="white" sx={{ fontWeight: 600 }}>Compony</Typography>
                <Typography variant="body1" color='#ffffff80'>About Us</Typography>
                <Typography variant="body1" color="#ffffff80">Why Choose us</Typography>
                <Typography variant="body1" color="#ffffff80">Pricing</Typography>
                <Typography variant="body1" color="#ffffff80">Testimonial</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={2.6}>
                <Typography variant="h6" color="white" sx={{ fontWeight: 600 }}>Resources</Typography>
                <Typography variant="body1" color="#ffffff80">Privary Policy</Typography>
                <Typography variant="body1" color="#ffffff80">Terms and Conditions</Typography>
                <Typography variant="body1" color="#ffffff80">Blog</Typography>
                <Typography variant="body1" color="#ffffff80">Contact Us</Typography>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={2.6}>
                <Typography variant="h6" color="white" sx={{ fontWeight: 600 }}>Product</Typography>
                <Typography variant="body1" color="#ffffff80">Project Management</Typography>
                <Typography variant="body1" color="#ffffff80">Time cracker</Typography>
                <Typography variant="body1" color="#ffffff80">Time schedule</Typography>
                <Typography variant="body1" color="#ffffff80">Lead Generate</Typography>
                <Typography variant="body1" color="#ffffff80">Remote Colloboration</Typography>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Stack spacing={2}>
                  <Box>
                    <img src="/LogoWhite.png" alt="Logo" />
                  </Box>
                  <Box>
                    <Typography variant="h6" color="white" sx={{ fontWeight: 600, mb: 1 }}>Subscribe to our Newsletter</Typography>
                    <form style={{ display: 'flex'}} className={styles.form}>
                      <TextField className={styles.textfield} id="outlined-basic" variant="outlined" placeholder='Enter your email' sx={{
                        backgroundColor: '#2B2E3C', '& > .MuiInputBase-root': { color: '#fff'},
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          border: 'none',
                        }
                      }} />
                      <Button className={styles.button} sx={{ backgroundColor: 'white', color: 'primary.main', fontWeight: 600, padding: '16px 35px', borderRadius: '12px', '&:hover': { backgroundColor: 'secondary.main' }, position: 'relative', right: '25px' }}>Subscribe</Button>
                    </form>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
            <Box>

            </Box>

          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Footer