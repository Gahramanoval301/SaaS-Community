import * as React from 'react';
import { Typography, Box, Container, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from './index.module.css';
import ButtonC from '../Button';
import { sections } from '../../mockData/sections';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }} elevation={0}>
                <Toolbar>
                    <Container >
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                            <Box>
                                <img src="/Logo.png" alt="Logo" />
                            </Box>
                            <Box>
                                <Box>
                                    <nav style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                        <Stack flexDirection={'row'} sx={{ gap: 2 }}>
                                            {sections.map(({ id, title, href }) => {
                                                return (
                                                    <Link to={href} underline="none" key={id} className={styles.link}>{title}</Link>
                                                )
                                            })}
                                        </Stack>
                                        <ButtonC title={'Free trial'} />
                                    </nav>
                                </Box>
                            </Box>
                        </Stack>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header