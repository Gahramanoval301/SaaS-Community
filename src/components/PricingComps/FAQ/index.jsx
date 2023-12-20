import React, { useState } from 'react'
import { Typography, Box, Stack, Container, Grid, Button } from '@mui/material'
import styles from './index.module.css'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { data } from './data';
import FAQitem from './FaqItem';

const FAQ = () => {

  return (
    <Container>
      <Grid container  spacing={3}
       sx={{ backgroundColor: '#F0F2FE',borderRadius:'24px', p: { xs: 2, sm: 5 } }}>
        <Grid item xs={12} md={5}>
          <Stack spacing={2}>
            <Typography variant="h4">
              Frequestly Asked Questions</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmod tempor invidunt.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            {
              data.map(({ id, question, answer }) =>
                <FAQitem key={id} question={question} answer={answer} />
              )}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}

export default FAQ