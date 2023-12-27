import React from 'react'
import { Typography, Box, Stack, Button } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import styles from '../ContactSection/index.module.css'

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      companyName: '',
      workEmail: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "Minimum must be 5 characters")
        .required("Required"),
      companyName: Yup
        .string()
        .min(3, "Minimum must be 4 characters")
        .max(20, "This too much")
        .required('Required'),
      workEmail: Yup.string()
        .email('Invalid form')
        .min(3, 'Minimum must be 5 characters')
        .required("Required"),
      subject: Yup.string()
        .required("Required"),
      message: Yup.string()
        .min(5, 'Minimum must be 5 characters')
        .required("Required")
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} name='personal-info' id='personal-info'>
      <Stack spacing={3}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Drop us a message
          </Typography>
          <Typography variant="body1">
            We will get back to you as soon as possible.
          </Typography>
        </Box>
        <Stack spacing={2} className={styles.formBox} sx={{
          '& .MuiFilledInput-input, & .MuiInputBase-root'
            : { bgcolor: 'white', position: 'relative', borderBottom: 'none' },
          '& .MuiInputBase-input::placeholder'
            : { color: 'black', opacity: 0.7 }
        }}
        >
          <Box sx={{
            width: '100%',
            display: { xs: 'block', sm: 'flex' },
            gap: 1,
            flexWrap: { xs: 'wrap', sm: 'nowrap' },
            '& .MuiFilledInput-input': { bgcolor: 'white' }
          }}>
            <Box sx={{
              flex: 1, mb: { xs: 2, sm: 0 }
            }} >
              <TextField
                fullWidth
                id="fullName"
                variant="filled"
                name='fullName'
                placeholder={'Full Name'}
                {...formik.getFieldProps('fullName')} />
              {
                formik.errors.fullName && formik.touched.fullName ?
                  <p style={{ color: 'red' }}>
                    {formik.errors.fullName}
                  </p> : null
              }
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                fullWidth
                id="companyName"
                variant="filled"
                name='companyName'
                placeholder={'Company Name'}
                {...formik.getFieldProps('companyName')} />
              {
                formik.errors.companyName && formik.touched.companyName ?
                  <p style={{ color: 'red' }}>
                    {formik.errors.companyName}
                  </p> : null
              }
            </Box>
          </Box>
          <Box>
            <TextField
              fullWidth
              id="workEmail"
              variant="filled"
              name='workEmail'
              placeholder='Work Email'
              {...formik.getFieldProps('workEmail')} />
            {
              formik.errors.workEmail && formik.touched.workEmail ?
                <p style={{ color: 'red' }}>
                  {formik.errors.workEmail}
                </p> : null
            }
          </Box>
          <Box>
            <TextField
              fullWidth
              id="subject"
              variant="filled"
              name='subject'
              placeholder='Subject'
              {...formik.getFieldProps('subject')} />
            {
              formik.errors.subject && formik.touched.subject ?
                <p style={{ color: 'red' }}>
                  {formik.errors.subject}
                </p> : null
            }
          </Box>
          <Box className={styles.textarea} sx={{
            '& .MuiFormControl-root .MuiInputBase-root:before':
              { borderBottom: '1px solid transparent !important' }
          }}>
            <TextField InputProps={{
              style: {
                backgroundColor: 'white',
                position: 'relative',
                '&::placeholder': { color: 'red' }
              },
            }}
              fullWidth multiline minRows={7}
              id="message"
              variant="filled"
              name='message'
              placeholder='Message'
              {...formik.getFieldProps('message')}
            />
            {
              formik.errors.message && formik.touched.message ?
                <p style={{ color: 'red' }}>
                  {formik.errors.message}
                </p> : null
            }
          </Box>
          <Button type='submit' className={styles.submitBtn}>
            Send
          </Button>
        </Stack>
      </Stack>
    </form >
  )
}

export default ContactForm