import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import styles from "./Galeria.module.css";
import Link from "next/link";

export function Galeria() {
  return (
    <Grid
      id={"galeria"}
      className={styles.container}
      container
      display="row"
      justifyContent="center"
      py={5}
    >
      <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
        <Typography
          className={styles.title}
          color="black"
          variant="h4"
          component="h4"
        >
          Galeria de Serviços
        </Typography>
        <Typography pb={1} color="#808080" variant="h6" component="h6">
          Clique para ver mais imagens
        </Typography>
      </Grid>
      <Grid container spacing={2} justifyContent={"center"} xs={11} md={11}>
        <Grid item xs={11} sm={4} md={4} lg={3} xl={3}>
          <Card>
            <Link href="/galeria">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/lot0.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    Levantamentos e Locações Topográficas em Loteamentos Urbanos
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={11} sm={4} md={4} lg={3} xl={3}>
          <Card>
            <Link href="/galeria">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/obra0.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    Levantamento Topográfico e Locações de Obras Urbanas e
                    Rurais
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={11} sm={4} md={4} lg={3} xl={3}>
          <Card>
            <Link href="/galeria">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/usina0.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    Serviços de Locação Topográfica de Usinas Fotovoltaica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={11} sm={4} md={4} lg={3} xl={3}>
          <Card>
            <Link href="/galeria">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/images/incra0.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    Georreferenciamento e certificação de imóvel rural no
                    SIGEF/Incra
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
