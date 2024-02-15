'use client'
import * as React from 'react';
import { useState } from 'react'
import styles from './Layout.module.css'
import { Box, Button, Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import Image from 'next/image'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

interface NavLink {
    name: string,
    href: string,
}

const navLinks: NavLink[] = [
    { name: 'Contatos', href: '#' },
    { name: 'Sobre nós', href: '#' },
    { name: 'Inicio', href: '#' }
]

type Anchor = 'left';

export function Layout () {
    useState(() => {
        console.log('in useState')
    });

    const [state, setState] = React.useState({
        left: false,
    });
    
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
        
            setState({ ...state, [anchor]: open });
        };
    
    const list = (anchor: Anchor) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const isMobile = useMediaQuery('(max-width: 960px)');

    return (
        <main className={styles.main}>
            <Container className={styles.container}>
                <Image
                    src="/logo.png"
                    alt="Logo UnitsGeo"
                    priority={true}
                    width={150}
                    height={43}
                />
                <Stack className={styles.menu} spacing={2} direction='row'>
                    {navLinks.map((link, index) => (
                        <Button
                            key={index}
                            className={styles.button}>
                                {link.name}
                        </Button>
                    ))}
                </Stack>
                <div>
                    {(['left'] as const).map((anchor) => (
                        <React.Fragment key={anchor}>
                        {isMobile && (
                            <Button onClick={toggleDrawer(anchor, true)}>
                                <MenuIcon sx={{color: '#01a94e'}} />    
                            </Button>
                        )}
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </main>
    )
}
