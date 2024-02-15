import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from './SobreNos.module.css'
import Image from 'next/image';

export function SobreNos() {
    return (
        <Grid className={styles.container} container spacing={1} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Grid item xs={12} md={5}>
                <Typography className={styles.title} color='black' variant='h4' component="h4">
                    Sobre nós
                </Typography>
                <Typography className={styles.paragraph} color='black' variant='subtitle1'>
                    Fundada em janeiro de 2020 em Dourados/MS, a UnitsGeo é uma empresa especializada em consultoria ambiental e topográfica, atendendo em todo o estado de Mato Grosso do Sul, Mato Grosso e Paraná. Com uma equipe de profissionais qualificados, estamos comprometidos em entregar resultados sob medida para cada cliente, sempre alinhados às suas necessidades específicas.
                </Typography>
                <Typography className={styles.paragraph} color='black' variant='subtitle1'>
                    Equipada com tecnologia de ponta no mercado topográfico, a UnitsGeo oferece serviços de alta qualidade e precisão, essenciais para a elaboração e execução de projetos bem-sucedidos. Estamos prontos para ajudar sua empresa com serviços profissionais, ágeis e de qualidade, tanto em questões topográficas quanto ambientais.
                </Typography>
            </Grid>
            <Grid className={styles.img} item xs={12} md={4}>
                <Image
                    src="/quemsomos.png"
                    width={400}
                    height={400}
                    alt="Quem Somos"
                />
            </Grid>
        </Grid>
    )
}
