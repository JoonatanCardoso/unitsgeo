import React, { useRef, useEffect, useState } from "react";
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

const itemAmbiental = [
  {
    img: "/s1.jpg",
    title: "Ambiental",
  },
  {
    img: "/s2.jpg",
    title: "Ambiental",
  },
  {
    img: "/s3.jpg",
    title: "Ambiental",
  },
  {
    img: "/s4.jpg",
    title: "Ambiental",
  },
  {
    img: "/s5.jpg",
    title: "Ambiental",
  },
  {
    img: "/s6.jpg",
    title: "Ambiental",
  },
];

const itemTopografia = [
  {
    img: "/s7.jpg",
    title: "Topografia",
  },
  {
    img: "/s8.jpg",
    title: "Topografia",
  },
  {
    img: "/s9.jpg",
    title: "Topografia",
  },
  {
    img: "/s10.jpg",
    title: "Topografia",
  },
  {
    img: "/s11.jpg",
    title: "Topografia",
  },
  {
    img: "/s12.jpg",
    title: "Topografia",
  },
];

export function Servicos() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // ajuste conforme necessário
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Grid
      ref={ref}
      id={'servicos'}
      className={styles.container}
      container
      sx={{ flexDirection: { xs: "column", md: "row" } }}
      style={{
        backgroundImage: "url(/fundo.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid className={styles.img} item xs={10} md={5} my={5}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemTopografia.map((item) => (
            <ImageListItem
              key={item.img}
              style={{
                transition: "opacity 1.5s",
                opacity: isVisible ? 1 : 0,
              }}
            >
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
      <Grid item xs={11} md={5} my={5}>
        <Typography
          className={styles.title}
          color="black"
          variant="h4"
          component="h4"
        >
          Serviços Topográficos
        </Typography>
        <List
          className={styles.listServices}
          sx={{
            width: "100%",
            maxWidth: 500,
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          <ListItem alignItems="center">
            <ListItemText primary="Georreferenciamento de imóvel rural no SIGEF/Incra." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Desmembragem e remembragem de imóveis rurais." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Levantamentos topográficos planimétricos e planialtimétricos." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Locações e acompanhamento de obras." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projetos para ação de asucapião e regularização de imóveis." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Atualização e cadastro de ITR e CCIR." />
          </ListItem>
        </List>
      </Grid>

      <Grid className={styles.info} item xs={12} md={12} my={5}>
        <Grid
          className={styles.info}
          container
          sx={{ flexDirection: { xs: "row", md: "row" } }}
          style={{
            backgroundImage: "url(/info.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "opacity 3.5s",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </Grid>

      <Grid item xs={11} md={5} my={5}>
        <Typography
          className={styles.title}
          color="black"
          variant="h4"
          component="h4"
        >
          Serviços Ambientais
        </Typography>
        <List
          className={styles.listServices}
          sx={{
            width: "100%",
            maxWidth: 500,
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
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
            <ListItemText primary="Estudo de impacto ambiental - EIA e relação de controle ambiental - RCA." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projeto de recuperação de área degradada ou alterada - PRADA." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Cadastro ambiental rural - CAR." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Regularização de reserva legal." />
          </ListItem>
          <Divider variant="middle" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText primary="Outorga de recursos hídricos." />
          </ListItem>
        </List>
      </Grid>
      <Grid className={styles.img} item xs={10} md={5} my={5}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemAmbiental.map((item) => (
            <ImageListItem
              key={item.img}
              style={{
                transition: "opacity 5.5s",
                opacity: isVisible ? 1 : 0,
              }}
            >
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
