import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Typography, Box, Stack, Container, Grid, Button } from '@mui/material'
import styles from './index.module.css'


const FAQitem = ({ question, answer }) => {
    const [isToggled, setIsToggled] = useState(false)

    function handleToggle() {
        setIsToggled(prevToggle => !prevToggle)
        console.log(isToggled);
    }

    return (
        <Stack onClick={handleToggle}
            flexWrap={'wrap'}
            spacing={3}
            sx={{ backgroundColor: '#fff', borderRadius: '24px', padding: 3, cursor: 'pointer' }}>
            <Stack flexDirection={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                spacing={2}
                flexWrap={'wrap'} >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {question}
                </Typography>
                <Box sx={{ cursor: 'pointer' }}>
                    {isToggled ? <RemoveIcon /> : <AddIcon />}
                </Box>
            </Stack>
            {
                isToggled ?
                    <Typography variant="body1" sx={{
                        maxHeight: isToggled ? '500px' : '0',
                        transition: 'max-height 0.3s ease-in-out',
                    }}>
                        {answer}
                    </Typography> : null
            }
        </Stack>
    )
}

export default FAQitem