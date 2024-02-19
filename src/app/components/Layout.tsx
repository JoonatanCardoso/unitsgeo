"use client";
import * as React from "react";
import { useState } from "react";
import styles from "./Layout.module.css";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

type Anchor = "left";

export default function Layout() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useState(() => {
    console.log("in useState");
  });

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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
      <List sx={{ width: "100vw", minWidth: 360 }}>
        <ListItem>
          <Link href='/'>
            <Image
              className={styles.logoMobile}
              src="/images/logo.png"
              alt="Logo UnitsGeo"
              priority={true}
              width={150}
              height={43}
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("sobre")}>
            Sobre Nós
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("servicos")}>
            Serviços
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("galeria")}>
            Galeria
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton onClick={() => scrollToSection("contatos")}>
            Contatos
          </ListItemButton>
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemButton
            href="https://wa.me/5567998436686?text=Ol%C3%A1%2C+quero+solicitar+uma+cota%C3%A7%C3%A3o+com+a+UnitsGeo%21"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar Cotação
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const isMobile = useMediaQuery("(max-width: 960px)");
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <Grid className={styles.main}>
      <Grid className={styles.navbarSocial}>
        <a
          href="https://www.instagram.com/unitsgeo/"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.iconsMenu}
            src="/images/iconInsta.png"
            alt="Instagram"
            height={25}
            width={25}
          />
        </a>
        <a
          href="https://wa.me/5567998436686?text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o+com+a+UnitsGeo%21"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.iconsMenu}
            src="/images/iconWhats.png"
            alt="Instagram"
            height={25}
            width={25}
          />
        </a>
        <a
          href="https://maps.app.goo.gl/cfPZopzhS9yjKxbN7"
          target="_blank"
          rel="noreferrer"
        >
          <Image
            className={styles.iconsMenu}
            src="/images/iconMaps.png"
            alt="Instagram"
            height={25}
            width={25}
          />
        </a>
      </Grid>
      <Grid
        className={styles.container}
        container
        padding={1}
        sx={{ flexDirection: { xs: "row", md: "row" } }}
        style={{
          backgroundImage: "url(/images/navbarcop.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Link href='/'>
          <Image
            src="/images/logo-preto.png"
            alt="Logo UnitsGeo"
            priority={true}
            width={150}
            height={43}
            style={{ cursor: 'pointer' }}
          />
        </Link>
        <div>
          {(["left"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              {isMobile && (
                <Button onClick={toggleDrawer(anchor, true)}>
                  <MenuIcon sx={{ color: "black" }} />
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

        {isDesktop && (
          <Grid
            justifyContent="right"
            container
            xs={12}
            md={10}
            sx={{ flexDirection: { xs: "row", md: "row" } }}
          >
            <Grid className={styles.img} item xs={12} md={isDesktop ? 2 : 3}>
              <Button
                className={styles.button}
                onClick={() => scrollToSection("sobre")}
                sx={{ color: '#000'}}
              >
                Sobre Nós
              </Button>
            </Grid>
            <Grid className={styles.img} item xs={12} md={isDesktop ? 2 : 3}>
              <Button
                className={styles.button}
                onClick={() => scrollToSection("servicos")}
                sx={{ color: '#000'}}
              >
                Serviços
              </Button>
            </Grid>
            <Grid className={styles.img} item xs={12} md={isDesktop ? 2 : 3}>
              <Button
                className={styles.button}
                onClick={() => scrollToSection("galeria")}
                sx={{ color: '#000'}}
              >
                Galeria
              </Button>
            </Grid>
            <Grid className={styles.img} item xs={12} md={isDesktop ? 2 : 3}>
              <Button
                className={styles.button}
                onClick={() => scrollToSection("contatos")}
                sx={{ color: '#000'}}
              >
                Contatos
              </Button>
            </Grid>
            <Grid className={styles.img} item xs={12} md={isDesktop ? 3 : 3}>
              <Button
                className={styles.button}
                href="https://wa.me/5567998436686?text=Ol%C3%A1%2C+quero+solicitar+uma+cota%C3%A7%C3%A3o+com+a+UnitsGeo%21"
                target="_blank"
                rel="noreferrer"
                sx={{ color: '#000'}}
              >
                Solicitar Cotação
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
