import * as React from 'react';
import { Typography, Box, Container, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from './index.module.css';
import ButtonC from '../Button';
import { sections } from '../../mockData/sections';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { SafetyCheckSharp } from '@mui/icons-material';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', py: 1, position:'fixed'}} elevation={0}>
                <Toolbar>
                    <Container >
                        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
                            <Box>
                                <img src="/Logo.png" alt="Logo" />
                            </Box>
                            <Box>
                                <Box className={styles.navbar}>
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
                                <Box className={styles.responsiveMenu}>
                                    <nav className={styles.responsiveNav} style={{ display: 'flex', alignItems: 'center' ,gap: '16px'}}>
                                        <div>
                                            <Button
                                                id="basic-button"
                                                aria-controls={open ? 'basic-menu' : undefined}
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleClick}
                                            >
                                                <MenuIcon fontSize='large' />

                                            </Button>
                                            <Menu
                                                id="basic-menu"
                                                anchorEl={anchorEl}
                                                open={open}
                                                onClose={handleClose}
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <Stack className={styles.menuList}>

                                                    {sections.map(({ id, title, href }) => {
                                                        return (
                                                            <MenuItem onClick={handleClose} >
                                                                <Link to={href} underline="none" key={id} className={styles.link}>{title}</Link>
                                                            </MenuItem>
                                                        )
                                                    })}
                                                </Stack>
                                            </Menu>
                                        </div>
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