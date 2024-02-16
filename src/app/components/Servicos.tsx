import React, { useRef, useEffect, useState } from "react";
import {
  List,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import styles from "./Servicos.module.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export function Servicos() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [itemTopografia] = useState([
    {
      img: "/images/s7.jpg",
      title: "Topografia",
    },
    {
      img: "/images/s8.jpg",
      title: "Topografia",
    },
    {
      img: "/images/s9.jpg",
      title: "Topografia",
    },
    {
      img: "/images/s10.jpg",
      title: "Topografia",
    },
    {
      img: "/images/s11.jpg",
      title: "Topografia",
    },
    {
      img: "/images/s12.jpg",
      title: "Topografia",
    },
  ]);

  const [itemAmbiental] = useState([
    {
      img: "/images/s1.jpg",
      title: "Ambiental",
    },
    {
      img: "/images/s2.jpg",
      title: "Ambiental",
    },
    {
      img: "/images/s3.jpg",
      title: "Ambiental",
    },
    {
      img: "/images/s4.jpg",
      title: "Ambiental",
    },
    {
      img: "/images/s5.jpg",
      title: "Ambiental",
    },
    {
      img: "/images/s6.jpg",
      title: "Ambiental",
    },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("entry", entry);

        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("isVisibleisVisibleisVisible", isVisible);
        }
      },
      { threshold: 0.5 }
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
      id={"servicos"}
      className={styles.container}
      container
      style={{
        backgroundImage: "url(/images/fundo.png)",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "opacity 1.5s",
        opacity: isVisible ? 1 : 0,
      }}
    >
      
      <Grid ref={ref} className={styles.img} item xs={11} md={5} my={5}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemTopografia.map((item) => (
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
            width: "90vw",
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          <ListItem alignItems="center">
            <ListItemText primary="Georreferenciamento de imóvel rural no SIGEF/Incra" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Desmembragem e remembragem de imóveis rurais" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Levantamentos topográficos planimétricos e planialtimétricos" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Locações e acompanhamento de obras" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projetos para ação de asucapião e regularização de imóveis" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Atualização e cadastro de ITR e CCIR" />
          </ListItem>
        </List>
      </Grid>

      <Grid className={styles.info} container xs={11} md={12} my={5}>
        <Grid className={styles.infoIcon} item xs={11} md={6}>
          <CheckCircleIcon sx={{margin: 1, color: 'white'}} fontSize="large" />
          <Typography
            className={styles.title}
            color="white"
            variant="h5"
            component="h5"
          >
            Especializado em Regularização de Imóveis Rurais
          </Typography>
        </Grid>
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
            width: "90vw",
            maxHeight: 300,
            overflowY: "auto",
          }}
        >
          <ListItem alignItems="center">
            <ListItemText primary="Licenciamento de Atividades Rurais e Urbanas" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Autorização ambiental" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Licença ambiental simplificada - L.S." />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Licença Prévia - L.P." />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Licença Instalação - L.I." />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Licença de Operação - L.O." />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projetos de gerenciamento de resíduos" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Estudo de impacto ambiental - EIA e relação de controle ambiental - RCA" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Projeto de recuperação de área degradada ou alterada - PRADA" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Cadastro ambiental rural - CAR" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Regularização de reserva legal" />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemText primary="Outorga de recursos hídricos" />
          </ListItem>
        </List>
      </Grid>
      <Grid ref={ref} className={styles.img} item xs={11} md={5} my={5}>
        <ImageList variant="woven" cols={3} gap={8}>
          {itemAmbiental.map((item) => (
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
