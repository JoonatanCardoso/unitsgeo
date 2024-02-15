import React from "react";
import {
  List,
  Avatar,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./Servicos.module.css";
import Image from "next/image";

const itemData = [
  {
    img: "/banner.jpg",
    title: "Bed",
  },
  {
    img: "/banner2.jpg",
    title: "Books",
  },
  {
    img: "/banner3.jpg",
    title: "Sink",
  },
  {
    img: "/banner4.jpg",
    title: "Kitchen",
  },
  {
    img: "/banner5.jpg",
    title: "Laptop",
  },
  {
    img: "/banner6.jpg",
    title: "Doors",
  },
];

export function Servicos() {
  return (
    <Grid
      className={styles.container}
      container
      spacing={1}
      sx={{ flexDirection: { xs: "column", md: "row" } }}
    >
      <Grid className={styles.img} item xs={12} md={5} my={5}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={12} md={5} my={5}>
        <Typography className={styles.title} color='black' variant='h4' component="h4">
            Serviços Topográficos
        </Typography>
        <List className={styles.listServices} sx={{ width: "100%", maxWidth: 500, maxHeight: 300, overflowY: 'auto' }}>
          <ListItem alignItems="center">
            <ListItemText primary="Georreferenciamento de imóvel rural no SIGEF/Incra." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Desmembragem e remembragem de imóveis rurais." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Levantamentos topográficos planimétricos e planialtimétricos."/>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Locações e acompanhamento de obras."/>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projetos para ação de asucapião e regularização de imóveis."/>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Atualização e cadastro de ITR e CCIR."/>
          </ListItem>
        </List>
      </Grid>
      
      <Grid item xs={12} md={5} my={5}>
        <Typography className={styles.title} color='black' variant='h4' component="h4">
            Serviços Ambientais
        </Typography>
        <List className={styles.listServices} sx={{ width: "100%", maxWidth: 500, maxHeight: 300, overflowY: 'auto' }}>
          <ListItem alignItems="center">
            <ListItemText primary="Licenciamento de Atividades Rurais e Urbanas" />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Autorização ambiental" />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
              <ListItemText primary="Licença ambiental simplificada - L.S." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
              <ListItemText primary="Licença Prévia - L.P." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
              <ListItemText primary="Licença Instalação - L.I." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
              <ListItemText primary="Licença de Operação - L.O." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projetos de gerenciamento de resíduos." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Estudo de impacto ambiental - EIA e relação de controle ambiental - RCA."/>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projeto de recuperação de área degradada ou alterada - PRADA."/>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Cadastro ambiental rural - CAR."/>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Regularização de reserva legal."/>
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Outorga de recursos hídricos."/>
          </ListItem>
        </List>
      </Grid>
      <Grid className={styles.img} item xs={12} md={5} my={5}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  );
}
