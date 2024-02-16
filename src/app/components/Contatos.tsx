import React, { useRef, useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./Contatos.module.css";

export function Contatos() {
  const handleClick = () => {
    window.open("https://maps.app.goo.gl/cfPZopzhS9yjKxbN7", "_blank");
  };

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      ref={ref}
      className={styles.container}
      container
      sx={{ flexDirection: { xs: "row", md: "row" } }}
      style={{
        backgroundImage: "url(/images/footer.jpg)",
        width: "100vw",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        style={{
          width: "100vw",
          height: "400px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <a
          href="https://maps.app.goo.gl/cfPZopzhS9yjKxbN7"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.imageMaps}
            src="/images/maps.jpg"
            alt="Mapa"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </a>
      </Grid>

      <Grid
        id={'contatos'}
        padding={2}
        item
        xs={12}
        md={3}
        style={{ transition: "opacity 2.5s", opacity: isVisible ? 1 : 0 }}
      >
        <Image
          src="/images/logo.png"
          alt="Logo UnitsGeo"
          priority={true}
          width={300}
          height={86}
        />
      </Grid>
      <Grid className={styles.itemsContainer}>
        <Grid
          padding={2}
          item
          xs={12}
          md={3}
          style={{ transition: "opacity 2.5s", opacity: isVisible ? 1 : 0 }}
        >
          <Typography
            className={styles.title}
            color="black"
            variant="h6"
            component="h6"
          >
            Contato
          </Typography>
          <Typography
            className={styles.paragraph}
            color="black"
            variant="subtitle1"
          >
            (67) 99843-6686
          </Typography>
          <Typography
            className={styles.paragraph}
            color="black"
            variant="subtitle1"
          >
            (67) 99606-7526
          </Typography>
        </Grid>
        <Grid
          padding={2}
          item
          xs={12}
          md={4}
          style={{ transition: "opacity 2.5s", opacity: isVisible ? 1 : 0 }}
        >
          <Typography
            className={styles.title}
            color="black"
            variant="h6"
            component="h6"
          >
            Endereço
          </Typography>
          <Typography
            className={styles.paragraph}
            color="black"
            variant="subtitle1"
          >
            Rua Onófre Pereira de Matos, 1535 - Sala 04 - Centro
          </Typography>
          <Typography
            className={styles.paragraph}
            color="black"
            variant="subtitle1"
          >
            Dourados - MS
          </Typography>
        </Grid>
        <Grid
          padding={2}
          item
          xs={12}
          md={4}
          style={{ transition: "opacity 2.5s", opacity: isVisible ? 1 : 0 }}
        >
          <Typography
            className={styles.title}
            color="black"
            variant="h6"
            component="h6"
          >
            Horário de Funcionamento
          </Typography>
          <Typography
            className={styles.paragraph}
            color="black"
            variant="subtitle1"
          >
            Seg. à Sex. - 07:00 - 18:00
          </Typography>
          <Typography
            className={styles.paragraph}
            color="black"
            variant="subtitle1"
          >
            Sab. - 08:00 - 11:30
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
