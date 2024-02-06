import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Typography, Box, Stack, Grid, Divider } from '@mui/material'
import TableChartIcon from '@mui/icons-material/TableChart';
import CheckIcon from '@mui/icons-material/Check';
import ButtonC from '../../Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './index.module.css'

const PricingCard = ({ data }) => {
    console.log(data);

    return (
        <Grid item xs={12} sm={6} md={4} className={styles.cardDiv}>
            <Card className={styles.card}>
                <Stack className={styles.card_header} flexDirection={'row'} sx={{ gap: 2, padding: 4 }}>
                    <Box className={styles.iconDiv}>
                        <TableChartIcon />
                    </Box>
                    <Box>
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                            {data.headerTitle}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {data.headerBody}
                        </Typography>
                    </Box>
                </Stack>
                <Divider />
                <CardContent sx={{ padding: 4 }}>
                    <Stack spacing={2} className={styles.plans}>
                        {data.plans.map((plan_sect, index) =>
                            <Stack
                                key={index}
                                flexDirection={'row'}
                                alignItems={'center'}
                                sx={{ gap: 2 }}>
                                {plan_sect.isAllowed ?
                                    <Box className={styles.iconDiv} >
                                        <CheckIcon />
                                    </Box> :
                                    <Box className={styles.iconDiv2} >
                                        <CloseIcon />
                                    </Box>
                                }
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    {plan_sect.plan}
                                </Typography>
                            </Stack>
                        )}
                        <Typography variant="body1" sx={{ textAlign: 'center' }}>
                            {data.body}
                        </Typography>
                    </Stack>
                </CardContent>
                <Stack spacing={2} justifyContent={'center'} alignItems={'center'} sx={{ padding: 4 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" color="initial">
                            {data.price}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {data.expireDate}
                        </Typography>
                    </Box>
                    <ButtonC title={'Get started'} />
                </Stack>
            </Card>
        </Grid>
    )
}

export default PricingCard