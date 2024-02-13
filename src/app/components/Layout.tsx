import React from 'react';
import styles from './Layout.module.css'
import { Button, Container, Stack } from '@mui/material';
import Image from 'next/image'

interface NavLink {
    name: string,
    href: string,
}

const navLinks: NavLink[] = [
    { name: 'Contatos', href: '#' },
    { name: 'Sobre nós', href: '#' },
    { name: 'Inicio', href: '#' }
]

export function Layout () {
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
            </Container>
        </main>
    )
}
