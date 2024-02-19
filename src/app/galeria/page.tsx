import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ImageList, ImageListItem } from "@mui/material";
import styles from "./galeria.module.css";
import Layout from "../components/Layout";
import { Footer } from "../components/Footer";

const loteamento = [
  {
    img: "images/lot1.jpg",
    title: "Loteamento Urbano",
  },
  {
    img: "images/lot2.jpg",
    title: "Loteamento Urbano",
  },
  {
    img: "images/lot3.jpg",
    title: "Loteamento Urbano",
  },
  {
    img: "images/lot4.jpg",
    title: "Loteamento Urbano",
  },
  {
    img: "images/lot5.jpg",
    title: "Loteamento Urbano",
  },
  {
    img: "images/lot6.jpg",
    title: "Loteamento Urbano",
  },
  {
    img: "images/lot7.jpg",
    title: "Loteamento Urbano",
  },
  {
    img: "images/lot8.jpg",
    title: "Loteamento Urbano",
  },
];

const obras = [
  {
    img: "images/obra1.jpg",
    title: "Levantamento Topográfico e Locações",
  },
  {
    img: "images/obra2.jpg",
    title: "Levantamento Topográfico e Locações",
  },
  {
    img: "images/obra3.jpg",
    title: "Levantamento Topográfico e Locações",
  },
  {
    img: "images/obra4.jpg",
    title: "Levantamento Topográfico e Locações",
  },
  {
    img: "images/obra5.jpg",
    title: "Levantamento Topográfico e Locações",
  },
  {
    img: "images/obra6.jpg",
    title: "Levantamento Topográfico e Locações",
  },
  {
    img: "images/obra7.jpg",
    title: "Levantamento Topográfico e Locações",
  },
  {
    img: "images/obra8.jpg",
    title: "Levantamento Topográfico e Locações",
  },
];

const usina = [
  {
    img: "images/usina1.jpg",
    title: "Usinas Fotovoltaicas",
  },
  {
    img: "images/usina2.jpg",
    title: "Usinas Fotovoltaicas",
  },
  {
    img: "images/usina3.jpg",
    title: "Usinas Fotovoltaicas",
  },
  {
    img: "images/usina4.jpg",
    title: "Usinas Fotovoltaicas",
  },
  {
    img: "images/usina5.jpg",
    title: "Usinas Fotovoltaicas",
  },
  {
    img: "images/usina6.jpg",
    title: "Usinas Fotovoltaicas",
  },
  {
    img: "images/usina7.jpg",
    title: "Usinas Fotovoltaicas",
  },
  {
    img: "images/usina8.jpg",
    title: "Usinas Fotovoltaicas",
  },
];

const incras = [
  {
    img: "images/incra1.jpg",
    title: "Georreferenciamento e Certificação",
  },
  {
    img: "images/incra2.jpg",
    title: "Georreferenciamento e Certificação",
  },
  {
    img: "images/incra3.jpg",
    title: "Georreferenciamento e Certificação",
  },
  {
    img: "images/incra4.jpg",
    title: "Georreferenciamento e Certificação",
  },
  {
    img: "images/incra5.jpg",
    title: "Georreferenciamento e Certificação",
  },
  {
    img: "images/incra6.jpg",
    title: "Georreferenciamento e Certificação",
  },
  {
    img: "images/incra7.jpg",
    title: "Georreferenciamento e Certificação",
  },
  {
    img: "images/incra8.jpg",
    title: "Georreferenciamento e Certificação",
  },
];

function srcset(image: string, size: number, rows = 2, cols = 2) {
  return {
    src: `${image}?w=${size * 2}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * 2}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Galeria() {
  return (
    <Box display="row" className={styles.container} justifyContent="center">
      <Layout />
      <Grid
        item
        xs={11}
        sm={11}
        md={11}
        lg={11}
        xl={11}
        py={1}
        sx={{ textAlign: "center" }}
      >
        <Typography color="black" variant="h3" component="h3" mt={5}>
          Galeria de Serviços
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12}>
        <Typography py={5} color="#808080" variant="h5" component="h5">
          Levantamentos e Locações Topográficas em Loteamentos Urbanos
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12}>
        <Grid item xs={11} md={10}>
          <ImageList cols={12}>
            {loteamento.map((item) => (
              <ImageListItem key={item.img} cols={3} rows={3}>
                <img
                  {...srcset(item.img, 121)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12}>
        <Typography py={5} color="#808080" variant="h5" component="h5">
          Levantamento Topográfico e Locações de Obras Urbanas e Rurais
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12}>
        <Grid item xs={11} md={10}>
          <ImageList cols={12}>
            {obras.map((item) => (
              <ImageListItem key={item.img} cols={3} rows={3}>
                <img
                  {...srcset(item.img, 121)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12}>
        <Typography py={5} color="#808080" variant="h5" component="h5">
          Serviços de Locação Topográfica de Usinas Fotovoltaica
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12}>
        <Grid item xs={11} md={10}>
          <ImageList cols={12}>
            {usina.map((item) => (
              <ImageListItem key={item.img} cols={3} rows={3}>
                <img
                  {...srcset(item.img, 121)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12}>
        <Typography py={5} color="#808080" variant="h5" component="h5">
          Georreferenciamento e certificação de imóvel rural no SIGEF/Incra
        </Typography>
      </Grid>
      <Grid container justifyContent={"center"} xs={12} md={12} marginBottom={5}>
        <Grid item xs={11} md={10}>
          <ImageList cols={12}>
            {incras.map((item) => (
              <ImageListItem key={item.img} cols={3} rows={3}>
                <img
                  {...srcset(item.img, 121)}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
